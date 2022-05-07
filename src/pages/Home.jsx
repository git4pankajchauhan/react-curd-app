import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteUser, getUsers } from "../services/userInstance";

const Home = () => {
  const [users, setUsers] = useState([]);

  const loaduser = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  useEffect(() => {
    loaduser();
  }, []);

  const deleteUserById = async (id) => {
    await deleteUser(id);
    loaduser();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/users/${data.id}`}>
                    View
                  </Link>
                  <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${data.id}`}>
                    Edit
                  </Link>
                  <a className="btn btn-danger" href="#delete" onClick={() => deleteUserById(data.id)}>
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
