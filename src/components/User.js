import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [listUser, setlistUser] = useState([]);

  useEffect(() => {
    async function getUrlData() {
      const data = await axios.get(
        "https://667ef325f2cb59c38dc795b0.mockapi.io/users"
      );
      setlistUser(data.data);
    }
    getUrlData();
  }, []);

  return (
    <>
      <h1>Users List</h1>
      <h2>Add User: 
        <Link to='/createuser'>CreateUser</Link>
      </h2><br></br>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Id</th>
            <th>operation</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.id}</td>
                <td>
                  <Link to={"/edituser/"+ data.id}><button className="btn btn-primary">Edit</button></Link>
                  <Link to={"/deleteuser/"+ data.id}><button className="btn btn-danger">Delete</button></Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default User;
