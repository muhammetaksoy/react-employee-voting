import { gql } from '@apollo/client';

export const GET_EMPLOYEES = gql`
  query GetEmployees {
    employees {
      id
      firstName
      lastName
      position
      votes
      imageUrl,
      email,
      address,
      phone
    }
  }
`;


export const GET_EMPLOYEE = gql`
query GetEmployee($id: ID!) {
  employee(id: $id) {
    id
    firstName
    lastName
    position
    votes
    imageUrl,
    email,
    address,
    phone
  }
}
`;