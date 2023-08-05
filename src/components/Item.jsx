import React from "react";
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
import { Link } from "react-router-dom";

const Item = ({ nombre, precio, imagen, id }) => {
  return (
    <div className="cardItem">
      <Card
        overflow="hidden"
        variant="outline"
        borderRadius="lg"
        height="500px"
        shadow="dark-lg"
        _hover={{ boxShadow: "inner" }}
      >
        <div className="imagenItem">
          <Image
            objectFit="cover"
            borderRadius="lg"
            src={imagen}
            alt={nombre}
          />
        </div>
        <div className="cardFoot">
          <Stack spacing="3">
            <div className="tituloCard">
              <CardBody>
                <Heading size="md" py="2" color="gray.700">
                  {nombre}
                </Heading>
                <Text size="md" py="1">
                  ${precio}
                </Text>
              </CardBody>
            </div>
            <CardFooter>
              <Link to={`/item/${id}`}>
                <Button
                  variant="solid"
                  bg="#9fac82"
                  justify="center"
                  width="100%"
                  display="flex"
                  align="end"
                >
                  Ver
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </div>
      </Card>
    </div>
  );
};

export default Item;
