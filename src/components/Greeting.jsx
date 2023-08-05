import React from "react";
import { Heading, Image } from "@chakra-ui/react";

const Greeting = () => {
  return (
    <div className="header">
      <Heading m="1" size="lg" fontSize="50px">
        "Bienvenidos a Matrices"
      </Heading>
      <p className="headerParrafo">
        El primer e-commerce con el mejor catalogo de productos que llevara tu
        experiencia de mate al siguiente nivel
      </p>
    </div>
  );
};

export default Greeting;
