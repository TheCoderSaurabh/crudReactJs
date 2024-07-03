import axios from "axios";
import { useState } from "react";
import { Form } from "react-bootstrap";

const Create = () => {
  const [newData, setNewData] = useState({name:"", email:""});

  const handleInputChange =(e) =>{
    const {name, value}= e.target;
    setNewData({...newData, [name]: value});
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    axios.post("https://667ef325f2cb59c38dc795b0.mockapi.io/users", newData).then((data)=>{
      console.log(data);
    })
  }

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter the name" onChange={handleInputChange} name="name"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" onChange={handleInputChange} name="email"/>
        </Form.Group>
        <button type="submit" className="btn btn-success">Add User</button>
      </Form>
    </div>
  );
};

export default Create;