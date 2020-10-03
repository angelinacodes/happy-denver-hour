/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBar = /* GraphQL */ `
  query GetBar($id: ID!) {
    getBar(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listBars = /* GraphQL */ `
  query ListBars(
    $filter: ModelBarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
