import { GraphQLClient } from 'graphql-request';
import unfetch from 'isomorphic-unfetch';

export function request<Query, Variables = void>(
  query: string,
  variables?: Variables,
) {
  let endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

  if (!endpoint) {
    throw new Error('Endpoint not available in enviroment');
  }

  let client = new GraphQLClient(endpoint, { fetch: unfetch });

  return client.rawRequest<Query, Variables>(query, variables);
}
