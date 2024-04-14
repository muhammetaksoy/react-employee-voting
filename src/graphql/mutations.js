// mutations.js
import { gql } from '@apollo/client';

export const ADD_VOTE = gql`
  mutation AddVote($id: ID!) {
    addVote(id: $id) {
      id
      votes
    }
  }
`;