import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query Users {
  users {
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
`;


export const QUERY_ME = gql`
query Me {
  me {
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
`;
