import React from "react";
import { useState, useContext } from "react";
import { FormLabel, Input, Button, Text } from "@chakra-ui/react";
import {
  collection,
  addDoc,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { CartContext } from "../context/ShoppingCartContext";
import Congrats from "./Congrats";

const Form = () => {
  const { total } = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tarjeta, setTarjeta] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [congrats, setCongrats] = useState("false");
  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(ordersCollection, order).then(
      ({ id }) => setOrderId(id),
      setCongrats("true")
    );
  };

  const order = {
    name,
    email,
    tarjeta,
  };

  const ordersCollection = collection(db, "orden");

  if (congrats == "true") {
    return (
      <Congrats
        orderId={orderId}
        name={name}
        tarjeta={tarjeta}
        email={email}
        total={total()}
      />
    );
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <FormLabel fontSize="large">Numero de tarjeta</FormLabel>
        <Input
          type="text"
          onChange={(e) => setTarjeta(e.target.value)}
          padding="5px"
          margin="5px"
          required
        />
        <FormLabel fontSize="large">Nombre</FormLabel>
        <Input type="text" onChange={(e) => setName(e.target.value)} required />
        <FormLabel fontSize="large">Fecha de expiracion</FormLabel>
        <Input type="text" required />
        <FormLabel fontSize="large">CVV</FormLabel>
        <Input type="text" required />
        <FormLabel fontSize="large">Email</FormLabel>
        <Input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Text padding="10px">Total: ${total()} </Text>
        <Button
          type="submit"
          margin="10px"
          variant="solid"
          bg="#9fac82"
          justify="center"
          display="flex"
          align="end"
          width="200px"
        >
          Comprar
        </Button>
      </form>
    </div>
  );
};

export default Form;
