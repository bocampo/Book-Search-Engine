import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      password
      savedBooks {
        _id
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
}
`;

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      password
      savedBooks {
        _id
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
}
`;

export const ADD_BOOK = gql`
mutation AddBook($bookText: String!) {
  addBook(bookText: $bookText) {
    _id
    authors
    description
    bookId
    image
    link
    title
  }
}
`;

export const REMOVE_BOOK = gql`
mutation Mutation($bookId: ID!) {
  removeBook(bookId: $bookId) {
    _id
    authors
    description
    bookId
    image
    link
    title
  }
}
`;
