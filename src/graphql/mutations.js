/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBar = /* GraphQL */ `
  mutation CreateBar(
    $input: CreateBarInput!
    $condition: ModelBarConditionInput
  ) {
    createBar(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateBar = /* GraphQL */ `
  mutation UpdateBar(
    $input: UpdateBarInput!
    $condition: ModelBarConditionInput
  ) {
    updateBar(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteBar = /* GraphQL */ `
  mutation DeleteBar(
    $input: DeleteBarInput!
    $condition: ModelBarConditionInput
  ) {
    deleteBar(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
