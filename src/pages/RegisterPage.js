import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { authActions } from "../redux/actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { routeActions } from "../redux/actions/route.actions";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

const Registerpage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectTo = useSelector((state) => state.route.redirectTo);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    avatarUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, password2, avatarUrl } = formData;
    if (password !== password2) {
      toast.error("Password do not match");
      return;
    } else {
      dispatch(
        authActions.registerUser({
          name,
          email,
          password,
          avatarUrl,
        })
      );
    }
  };

  useEffect(() => {
    if (redirectTo) {
      history.push(redirectTo);
      dispatch(routeActions.removeRedirectTo());
    }
  }, [redirectTo]);
  return (
    <div className="text-center login-box">
      <Form onSubmit={handleSubmit}>
        <h3>REGISTER</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your name"
            name="name"
            onChange={handleChange}
            style={{ width: "300px" }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            name="password2"
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          style={{ width: "100px", marginTop: "20px" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Registerpage;
