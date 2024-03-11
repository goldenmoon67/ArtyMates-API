import gql from 'graphql-tag';
const typeDefs = gql`
  type Query {
    getAllUsers: [User]
    getUserByName(name: String!): User
  }
  type User {
    id:Int!
    name: String!,
    age: Int,
    male: Boolean!
  }
  input UserInput {
    name: String!,
    age: Int,
    male: Boolean!
  }
  type Mutation {
    createUser(user: UserInput!): User
  }
`
export default typeDefs;