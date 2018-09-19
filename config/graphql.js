import path from 'path'
import { ApolloServer } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import { fileLoader, mergeTypes, mergeResolvers} from 'merge-graphql-schemas'

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, '/../schema')))
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, '/../resolvers')))

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default (app, db) => {
  const server = new ApolloServer({ schema, context: { db }})
  server.applyMiddleware({app, path:'/graphql'})
}