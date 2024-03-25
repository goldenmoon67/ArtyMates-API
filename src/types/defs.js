import gql from 'graphql-tag';
const typeDefs = gql`
type User {
  id: ID!
  name: String!
}

type Query {
  user(id: ID!): User
}

type Mutation {
  createUser(name: String!): User
}
`
export default typeDefs;