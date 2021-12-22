import { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/userSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div className="basetemp-container1">
      <div className="col-md-6 col-md-offset-2">
        <Card style={{ width: "30rem" }} bg="light">
          <h5>
            <Card.Header style={{ color: "blue" }}>Login Page</Card.Header>
          </h5>
          <Card.Body>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEnd">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button
                className="addbtn button1"
                variant="primary"
                type="submit"
              >
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Login;
