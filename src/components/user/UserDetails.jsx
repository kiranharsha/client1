import React, { useState } from "react";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { GET_ALL_USERS } from "../../graphql/queries/userQuery";
import { CREATE_USER_MUTATION } from "../../graphql/mutation/userMutation";
import "./UserDetails.css";

const UserDetails = () => {
  // Create User States
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("");

  const { data, loading, refetch } = useQuery(GET_ALL_USERS);

  const [createUser] = useMutation(
    CREATE_USER_MUTATION,
    {
      variables: {
        input: { name, username, age: Number(age), nationality },
      },
    },
    refetch()
  );

  if (data) {
    console.log(data);
  }

  if (loading) {
    return <h1> Data is loading</h1>;
  }

  return (
    <div className="main">
      <div>
        
        <p className="user_form">USER FORM</p>
        <form>
          <div className="user">
            <div class="form-group row">
              <label for="name" class="col-md-2 col-form-label">
                Name
              </label>
              <div class="col-md-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name..."
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />{" "}
              </div>
            </div>

            <div class="form-group row">
              <label for="username" class="col-md-2 col-form-label">
                UserName
              </label>
              <div class="col-md-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="UserName..."
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />{" "}
              </div>
            </div>

            <div class="form-group row">
              <label for="number" class="col-md-2 col-form-label">
                Number
              </label>
              <div class="col-md-4">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Age..."
                  onChange={(event) => {
                    setAge(event.target.value);
                  }}
                />
              </div>
            </div>

            <div class="form-group row">
              <label for="nationality" class="col-md-2 col-form-label">
                Nationality
              </label>
              <div class="col-md-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nationality..."
                  onChange={(event) => {
                    setNationality(event.target.value.toUpperCase());
                  }}
                />
              </div>
            </div>
            <button
              onClick={createUser}
              class="col-md-5 btn btn-primary user_btn"
            >
              Create User
            </button>
            {/* <button onClick={createUser}> Create User</button> */}
          </div>
        </form>
      </div>
      <div>
        <p className="user_list">USER LIST</p>
              <div>
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">UserName</th>
                      <th scope="col">Age</th>
                      <th scope="col">Nationality</th>
                    </tr>
                  </thead>
                  <tbody>
                 {data&& data.users.map((user) => (
                    <tr>
                      <th scope="row">{user.id}</th>
                      <td>{user.name}</td>
                      <td>{user.name}</td>
                      <td>{user.age}</td>
                      <td>{user.nationality}</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
      </div>
    </div>
  );
};

export default UserDetails;
