import React from "react";
import {
  Card,
  Stack,
  Heading,
  Text,
  Image,
  Button,
  CardBody,
  CardFooter,
  ButtonGroup,
  Box,
} from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";
import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/ShoppingCartContext";

const ItemDetail = ({ articulos }) => {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const itemId = articulos.filter((articulo) => articulo.id == id);
  const { addItem } = useContext(CartContext);

  const onAdd = () => {
    addItem(itemId[0], count);
  };

  return (
    <>
      {itemId.map((p) => {
        return (
          <div key={p.id}>
            <Card
              spacing="0"
              padding="30px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
              variant="outline"
              margin="50px"
            >
              <div className="imagenItemSelect">
                <Image
                  objectFit="cover"
                  height="100%"
                  src={p.img}
                  alt={p.nombre}
                  maxW="300"
                />
              </div>

              <Stack
                spacing="0"
                alignItems="center"
                justifyContent="center"
                direction="column"
              >
                <CardBody
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  padding="30px"
                >
                  <Heading size="xl">{p.nombre}</Heading>

                  <Text py="2">{p.descripcion}</Text>
                </CardBody>
                <ButtonGroup justifyContent="center" margin="5px">
                  <ItemCount
                    count={count}
                    setCount={setCount}
                    stock={p.stock}
                  />
                </ButtonGroup>
                <CardFooter justifyContent="center">
                  <Button variant="solid" bg="#9fac82" onClick={onAdd}>
                    Comprar {p.nombre}
                  </Button>
                </CardFooter>
              </Stack>
              <Box display="flex" justifyContent="end">
                <Link to={"/home"}>
                  <Button m="10px">Volver al Inicio</Button>
                </Link>
              </Box>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default React.memo(ItemDetail);
