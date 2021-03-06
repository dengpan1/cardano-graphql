import { ApolloServerBase } from 'apollo-server-core'
import * as fs from 'fs'
import * as path from 'path'
import * as depthLimit from 'graphql-depth-limit'
import { getConfig } from '../config'

export async function TestApolloServer (): Promise<ApolloServerBase> {
  process.env.HASURA_URI = 'http://localhost:8090/v1/graphql'
  const { context, resolvers } = await getConfig()
  // ApolloServer has express encapsulated, so the 'apollo-server-testing' package requires the base
  return new ApolloServerBase({
    context,
    introspection: true,
    resolvers,
    typeDefs: fs.readFileSync(path.join(__dirname, '../schema.graphql'), 'UTF8'),
    validationRules: [depthLimit(20)]
  })
}
