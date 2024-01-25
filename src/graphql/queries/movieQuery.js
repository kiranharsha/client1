import { gql } from "@apollo/client";

export const GET_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      id
      name
      yearOfPublication
      isInTheaters
    }
  }
`;

export const GET_MOVIE_NAME = gql`
  query GetMovieName($name: String!) {
    movie(name: $name) {
      name
      yearOfPublication
      isInTheaters
    }
  }
`;
