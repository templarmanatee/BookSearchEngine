import { gql } from "@apollo/client";

// execute the `loginUser` mutation set up using Apollo Server.
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, $password: $password) {
      token 
      user {
        _id 
        username
      }
    }
  }
`;

// execute the `addUser` mutation.
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    login(email: $email, $password: $password) {
      token 
      user {
        _id 
        username
      }
    }
  }
`;

// execute the `saveBook` mutation.
export const SAVE_BOOK = gql`
  mutation saveBook($book: BookInput!) {
    saveBook(book: $book) {
      username
      email
      bookCount
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

// execute the `removeBook` mutation.
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      username
      email
      bookCount
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
