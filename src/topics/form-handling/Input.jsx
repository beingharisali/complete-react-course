import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Input() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  function handleFullname(e) {
    setFullName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    let user = { fullname, email };
    console.log(user);
    setFullName("");
    setEmail("");
  }
  return (
    <div className="w-1/3 mx-auto">
      <h1>Form Handling</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John Doe"
            value={fullname}
            onChange={handleFullname}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="john@gmail.com"
            value={email}
            onChange={handleEmail}
          />
        </Form.Group>
        <Button variant="success" className="w-full" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Input;
