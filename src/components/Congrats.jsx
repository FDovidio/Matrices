import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Box,
  Stack,
  StackDivider,
  Button
} from "@chakra-ui/react";
import { CartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Congrats = ({ orderId, name, tarjeta, email, total }) => {
  const { cart } = useContext(CartContext);
  return (
    <div className="congratsCard">
      <Card>
        <CardHeader>
          <Heading size="xl" display='flex' justifyContent='center' margin='10px'>Resumen de compra</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                orden {orderId}
              </Heading>
              <Text pt="2" fontSize="sm"></Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Nombre
              </Heading>
              <Text pt="2" fontSize="sm">
                {name}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Email
              </Heading>
              <Text pt="2" fontSize="sm">
                {email}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Tarjeta
              </Heading>
              <Text pt="2" fontSize="sm">
                {tarjeta}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Productos
              </Heading>
              {cart.map((item) => {
                return(
                  <div key={item.id}>
                <Text pt="2" fontSize="sm">
                  {item.nombre} x {item.cant} unidades
                </Text>
                </div>
                )
              })}
              </Box>
              <Box>
              <Heading size="xs" textTransform="uppercase" >
                Total
              </Heading>
              <Text pt="2" fontSize="sm">
                ${total}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Box display='flex' justifyContent='end' >
        <Link to={'/home'}>
      <Button m='10px'>
        Volver al Inicio
      </Button>
      </Link>
      </Box>
    </div>
  );
};

export default Congrats;
