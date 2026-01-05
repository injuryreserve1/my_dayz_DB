import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import http from "http";
import express from "express";
import { applyMiddleware } from "graphql-middleware";
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { $server } from "../config/";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/types";
import models from "./models";
import { fileURLToPath } from "url";
import { expressMiddleware } from "@as-integrations/express5";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const httpServer = http.createServer(app);

const corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(cors(corsOptions));

const schema = applyMiddleware(
  makeExecutableSchema({ typeDefs, resolvers: resolvers as any }),
);

const apolloServer = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

const main = async () => {
  const alter = true;
  const force = false;

  await apolloServer.start();

  await models.sequelize.sync({ alter, force });

  app.use("/dayzimages", express.static(path.join(__dirname, "../dayzimages")));
  console.log(path.join(__dirname, "../dayzimages"));
  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(apolloServer, {
      context: async () => ({ models }),
    }),
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: $server.port }, resolve),
  );
  console.log(`Server ready at http://localhost:${$server.port}/graphql`);
};

main();
