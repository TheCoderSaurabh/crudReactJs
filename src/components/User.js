import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [listUser, setlistUser] = useState([]);

  useEffect(() => {
    async function getUrlData() {
      const data = await axios.get(
        "http://localhost:4000/users"
      );
      console.log(data);
      setlistUser(data.data);
    }
    getUrlData();
  }, []);

  async function handleDelete(id){
    console.log(id);
    const data = await axios.delete(
      "http://localhost:4000/users/"+id
    );
    setlistUser(values => {
      return values.filter(item => item._id !== id)
    })
    console.log(data)
  }
  return (
    <>
      <h1>Users List</h1>
      <h2>Add User: 
        <Link to='/createuser'>CreateUser</Link><br></br>
        Search User:
        <Link to='/searchuser'>SearchUser</Link>
      </h2><br></br>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            {/* <th>Id</th> */}
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
                {/* <td>{data._id}</td> */}
                <td>
                  <Link to={"/edituser/"+ data._id}><button className="btn btn-primary">Edit</button></Link>
                  <Link to={(e)=>e.preventDefault()}><button onClick={()=>handleDelete(data._id)} className="btn btn-danger">Delete</button></Link>
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
