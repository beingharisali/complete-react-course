import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";

function Multiple_Input() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);

  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  }
  //   function handleFirstName(e) {
  //     setFirstName(e.target.value);
  //   }
  //   function handleLastName(e) {
  //     setLastName(e.target.value);
  //   }
  //   function handleEmail(e) {
  //     setEmail(e.target.value);
  //   }
  //   function handlePassword(e) {
  //     setPassword(e.target.value);
  //   }
  //   function submitHandler(e) {
  //     e.preventDefault();
  //     const user = {
  //       firstName,
  //       lastName,
  //       email,
  //       password,
  //     };
  //     console.log("single user", user);
  //     setUsers([...users, user]);
  //     console.log("Overall users", users);
  //     setFirstName("");
  //     setLastName("");
  //     setEmail("");
  //     setPassword("");
  //   }
  function submitHandler(e) {
    e.preventDefault();
    console.log(user);
    setUsers([...users, user]);
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  }
  return (
    <div className="container">
      <h1 className="text-center">Form Handling</h1>
      <Form className="w-1/3 mx-auto" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John"
            value={user.firstName}
            onChange={changeHandler}
            name="firstName"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Doe"
            value={user.lastName}
            onChange={changeHandler}
            name="lastName"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="john@gmail.com"
            value={user.email}
            onChange={changeHandler}
            name="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            value={user.password}
            onChange={changeHandler}
            name="password"
          />
        </Form.Group>
        <input type="file" />
        <Button variant="success" className="w-full" type="submit">
          Submit
        </Button>
      </Form>
      <div className="users flex flex-wrap my-4 gap-2">
        {users.map((mereUser) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  {mereUser.firstName} {mereUser.lastName}
                </Card.Title>
                <Card.Text>{mereUser.email}</Card.Text>
                <Button variant="primary">{mereUser.password}</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Multiple_Input;
