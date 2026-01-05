import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import type { FC, ReactNode } from 'react';

const httpLink = new HttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });

interface Props {
  children: ReactNode;
}

const WithApollo: FC<Props> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default WithApollo;
