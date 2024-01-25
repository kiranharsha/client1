import React, { useState } from "react";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
// import { GET_ALL_MOVIES, GET_MOVIE_NAME } from "../graphql/queries/movieQuery";
import {
  GET_ALL_MOVIES,
  GET_MOVIE_NAME,
} from "../../graphql/queries/movieQuery";
import "./MovieDetails.css";

const MovieDetails = () => {
  const [movieSearch, setmovieSearch] = useState("");
  const { data: movieData } = useQuery(GET_ALL_MOVIES);

  const [fetchMovie, { data: movieSearchData, error: movieError }] =
    useLazyQuery(GET_MOVIE_NAME, {
      variables: {
        name: movieSearch,
      },
    });

  return (
    <div>
      <h1 className="heading">Movie Detailes</h1>

      <div className="container">
        <div className="col-md-12 movie_list">
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">Movie Names</th>
              </tr>
            </thead>
            <tbody>
              {movieData &&
                movieData.movies.map((movie) => (
                  <tr>
                    <td>{movie.name}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr />

      <div>
        <input
          type="text"
          placeholder="Movie Name"
          onChange={(e) => setmovieSearch(e.target.value)}
        />
        <button onClick={fetchMovie}> Fetch Data</button>
      </div>

      <h1>Movie Search</h1>
      <div>
        {movieSearchData && (
          <div>
            <h3>Movie Name: {movieSearchData.movie.name}</h3>
            <h3>
              Year Of Publication: {movieSearchData.movie.yearOfPublication}
            </h3>
          </div>
        )}
        {movieError && <h2>Please Type correct movie name</h2>}
      </div>
    </div>
  );
};

export default MovieDetails;
