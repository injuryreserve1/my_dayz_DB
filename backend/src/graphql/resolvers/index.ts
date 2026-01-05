import { mergeResolvers } from '@graphql-tools/merge'

import weapon from './weapon'

const resolvers = mergeResolvers([weapon])
export default resolvers