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
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import {CartContext} from '../context/ShoppingCartContext';



const ItemDetail = ({ articulos }) => {
  const { id } = useParams();
  const itemId = articulos.filter((articulo) => articulo.id == id);
  
  const {setCart} = useContext(CartContext)
  function onAdd () {
    setCart (itemId)
  }



  return (
    <>
      {itemId.map((p) => {
        return (
          <div key="p.id">
            <Card
              spacing="0"
              padding="30px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              direction="row"
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
                  fontSize="30"
                >
                  <Heading size="xl">{p.nombre}</Heading>

                  <Text py="2">{p.descripcion}</Text>
                </CardBody>
                <ButtonGroup justifyContent="center" margin='5px'>
                  <ItemCount 
                  stock = {p.stock}
                  />
                </ButtonGroup>
                <CardFooter justifyContent="center">
                  <Button variant="solid" bg="#9fac82" onClick={onAdd}>
                    Comprar {p.nombre}
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default ItemDetail;
