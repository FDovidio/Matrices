import React from "react";
import {
  Box,
  Card,
  Stack,
  Image,
  Heading,
  Text,
  Button,
  CardBody,
  CardFooter,
  ButtonGroup,
} from "@chakra-ui/react";
import { CartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AlertCart from "./AlertCart";

const Cart = () => {
  const { cart, clear, total, removeItem, cartQuantity } =
    useContext(CartContext);

  return (
    <div className="cart">
      {cartQuantity() > 0 ? (
        cart.map((item) => {
          return (
            <div key={item.id}>
              <Stack>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  margin="30px"
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src={item.img}
                    alt={item.nombre}
                  />
                  <Stack>
                    <CardBody>
                      <Heading size="md">{item.nombre}</Heading>
                      <Text py="2">{item.descripcion}</Text>
                    </CardBody>
                    <CardFooter display="flex" flexDirection="column">
                      <p>Precio: Unidad: {item.precio} </p>
                      <p>
                        Total x {item.cant} = {item.precio * item.cant}
                      </p>
                      <Button
                        variant="solid"
                        bg="grey"
                        margin="20px"
                        width="200px"
                        onClick={() => removeItem(item.id)}
                      >
                        Eliminar
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
              </Stack>
            </div>
          );
        })
      ) : (
        <Box padding="70px">
          <AlertCart />
        </Box>
      )}
      {cartQuantity() > 0 && (
        <ButtonGroup display="flex" justifyContent="end">
          <Button
            variant="solid"
            bg="grey"
            justify="center"
            display="flex"
            align="end"
            margin="10px"
            width="200px"
            onClick={clear}
          >
            Limpiar Carrito
          </Button>
          <Link to="/form">
            <Button
              variant="solid"
              bg="#9fac82"
              justify="center"
              display="flex"
              align="end"
              margin="10px"
              width="200px"
            >
              Finalizar Compra
            </Button>
          </Link>
        </ButtonGroup>
      )}
      <br />
      <p className="totalForm">Total: ${total()}</p>
      <br />
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

export default Cart;
