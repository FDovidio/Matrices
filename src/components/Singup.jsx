import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Card,
  CardBody,
  Button,
  Heading,
} from "@chakra-ui/react";

const Singup = ({ greeting }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
      });
  };

  return (
    <Flex flexDirection="column" justify="center" align="center" py="5%">
      <Heading textAlign="center">{greeting}</Heading>
      <Card m="10px" w="500px">
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
            <Button bg="#9fac82" my="10px" type="submit" onClick={onSubmit}>
              Sign up
            </Button>
          </form>
          <p>
            Ya tenes cuenta? <NavLink to="/">Sign in</NavLink>
          </p>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Singup;
