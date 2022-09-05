// deno-lint-ignore-file no-explicit-any
import { gql } from 'graphql_tag';
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import type { GraphQLContext } from '../context/context.ts';

export const typeDefs = gql(Deno.readTextFileSync('./src/graphql/base.graphql'));


export const resolvers = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  Query: {
    graph(_: any, __: any, context: GraphQLContext) {
      return context.factory.create('User');
    }
  }
};
