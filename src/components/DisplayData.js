import React, { useState } from "react";
import {useQuery, useLazyQuery, useMutation } from "@apollo/client";
import {GET_ALL_USERS} from '../graphql/queries/userQuery'
import {GET_ALL_MOVIES, GET_MOVIE_NAME} from '../graphql/queries/movieQuery'
import {CREATE_USER_MUTATION} from '../graphql/mutation/userMutation'


const DisplayData = () => {
  // Create User States
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("");

  const [movieSearch, setmovieSearch] = useState("");

  const { data, loading, refetch } = useQuery(GET_ALL_USERS);
  const { data: movieData } = useQuery(GET_ALL_MOVIES);
 
  const [fetchMovie, { data: movieSearchData, error: movieError }] =
    useLazyQuery(GET_MOVIE_NAME, {
      variables: {
        name: movieSearch,
      },
    });

    const [createUser ] = useMutation(CREATE_USER_MUTATION, {
        variables: {
            input: { name, username, age: Number(age), nationality },
          },
         
    },
    refetch())

  console.log(movieSearchData);

  if (data) {
    console.log(data);
  }

  if (loading) {
    return <h1> Data is loading</h1>;
  }

  //   if (error) {
  //     console.log(error);
  //   }

  //   if (movieError) {
  //     console.log(`movieError ${movieError}`);
  //   }

  return (
    <div>
       <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Nationality..."
          onChange={(event) => {
            setNationality(event.target.value.toUpperCase());
          }}
        />
        {/* <button
          onClick={() => {
            createUser({
              variables: {
                input: { name, username, age: Number(age), nationality },
              },
            });

            refetch();
          }}
        >
          Create User
        </button> */}

        <button onClick={createUser}> Create User</button>
   
      </div>

      <h1>User Detailes</h1>
      {data &&
        data.users.map((user) => {
          // const {name, username, age, nationality} = user
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>UserName: {user.username}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Nationality: {user.nationality}</h1>
            </div>
          );
        })}
      <hr />

      <h1>Movie Detailes</h1>
      {movieData &&
        movieData.movies.map((movie) => {
          return (
            <div>
              <h1>Movie Name: {movie.name}</h1>
            </div>
          );
        })}
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

export default DisplayData;
