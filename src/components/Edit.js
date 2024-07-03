import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Edit = () => {
    const {id} = useParams(); // { id: 1 }
    const [userData, setUserData]= useState({name: "", email: ""});
    // console.log(id);
    useEffect(()=>{
        axios.get("https://667ef325f2cb59c38dc795b0.mockapi.io/users/"+id).then((data)=>{
        setUserData(data.data)
        });
    }, [id])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({...userData, [name]: value});
    };
     
    function handleFormSubmitdata(e){
        e.preventDefault();
        console.log(userData);
        axios.put("https://667ef325f2cb59c38dc795b0.mockapi.io/users/"+id, userData).then((data)=>{
            console.log(data);
        });
    }
  return (
    <div>
      <Form onSubmit={handleFormSubmitdata}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleInputChange} value={userData.name} placeholder="Enter the name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" onChange={handleInputChange} value={userData.email}    placeholder="name@example.com" />
        </Form.Group>
        <button type="submit">Update</button>
      </Form>
    </div>
  );
};

export default Edit;
