import {
  Card,
  Image,
  Text,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ItemCount = ({stock}) => {
  const [count, setCount] = useState(0);
  const [countStock, setCountStock] = useState(stock);
  const sumar = () => {
    if (count <= 10) {
      setCount(count + 1);
      setCountStock(countStock - 1);
      
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
      setCountStock(countStock + 1);
      
    }
  };

  return (
    <div className="cardContainer">
      <div className="cardItem">
      
        <Stack spacing={4} direction="row" align="center" justify="center">
          <Button colorScheme="teal" size="sm" onClick={restar}>
            -
          </Button>
          <p>{count}</p>
          <Button colorScheme="teal" size="sm" onClick={sumar}>
            +
          </Button>
        </Stack>
        <Text display='flex' justifyContent='center' alignItems='center' margin='10px'>Stock: {countStock}</Text>
      </div>
    </div>
  );
};

export default ItemCount;
