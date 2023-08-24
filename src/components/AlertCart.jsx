import React from "react";
import { Button, Card, CardBody, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AlertCart = () => {
  return (
    <>
      <Card
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <CardBody>
          <Text>Tu carrito esta vacio</Text>
          <Button>
            <Link to="/home">
              <Button>Ir al inicio</Button>
            </Link>
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default AlertCart;
