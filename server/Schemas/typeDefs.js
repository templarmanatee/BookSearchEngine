const { gql } = require ("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: _id
    username: String! 
    email: String! 
    bookCount: Int!
    savedBooks: [Book!]!
  }

  type BookInput {
    bookId: String 
    authors: [String]!
    description: String 
    title: String
    image: String
    link: String
  }

  type Book {
    bookId: String 
    authors: [String]!
    description: String 
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth 
    addUser(username: String!, password: String!): Auth 
    saveBook(book: BookInput): User 
    removeBook(bookId: String!): User
  }

  type Query {
    me: User
  }
`;

module.exports = typeDefs;