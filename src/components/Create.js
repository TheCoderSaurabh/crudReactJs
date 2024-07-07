import axios from "axios";
// import { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Create = () => {
  // const [newData, setNewData] = useState({ name: "", email: "" });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewData({ ...newData, [name]: value });
  // };

  function handleFormSubmit(data) {
    console.log(data);
    // e.preventDefault();
    axios
      .post("http://localhost:4000/users", data)
      .then((data) => {
        console.log(data);
      });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the name"
            // onChange={handleSubmit(handleFormSubmit)}
            name="name"
            {...register("name", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.name?.type === "required" && <p>This field is required</p>}
          {errors?.name?.type === "maxLength" && <p>First name cannot exceed 20 characters</p>}
          {errors?.name?.type === "pattern" && <p>Alphabetical characters only</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            // onChange={handleSubmit(handleInputChange)}
            name="email"
            {...register("email", {
              required:true
            })}
          />
          {errors?.email?.type === "required" && <p>email field is required</p>}
        </Form.Group>
        <button type="submit" className="btn btn-success">
          Add User
        </button>
      </Form>
    </div>
  );
};

export default Create;
