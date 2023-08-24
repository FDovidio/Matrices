import { Flex, Button, Badge } from "@chakra-ui/react";
import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const CardWidget = () => {
  const { cartQuantity } = useContext(CartContext);
  return (
    <Flex>
      <Button>
        <h4>🛒</h4>
        {cartQuantity() > 0 && <Badge>{cartQuantity()}</Badge>}
      </Button>
    </Flex>
  );
};

export default CardWidget;
