import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Card,
  CardBody,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";

const Login = ({ greeting }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = setError("Email or password is incorrect");
        const errorMessage = error.message;
      });
  };

  return (
    <Flex align="center" justify="center" py="5%" flexDirection="column">
      <Heading textAlign="center">{greeting}</Heading>
      <Card m="20px" w="500px">
        <CardBody>
          <form>
            <FormControl>
              <FormLabel htmlFor="email-address">Email address</FormLabel>
              <Input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormHelperText>No compartiremos tus datos.</FormHelperText>
            </FormControl>
            <div>
              <Button bg="#9fac82" my="10px" onClick={onLogin}>
                Login
              </Button>
            </div>
          </form>
          {error}
          <p>
            No tenes cuenta? <NavLink to="/signup">Sign up</NavLink>
          </p>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Login;
