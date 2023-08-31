import { gql } from "@apollo/client";

export const query = gql`
  query {
    characters(filter: { name: "rick" }) {
      results {
        id
        name
        image
        gender
      }
    }
  }
`;

