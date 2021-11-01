import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    users: [User!],
    user(id: ID!): User
    me: User
    hello: String!
  }
 
  type User {
    id: ID!
    username: String!
    fullname: String!
    messages: [Message!]
  }
`;