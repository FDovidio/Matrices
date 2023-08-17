import { SimpleGrid } from "@chakra-ui/react";
import Item from "./Item";
import React from 'react'

const ItemList = ({ articulos }) => {
  return (
    <div className="contenedorItem">
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {articulos.map((producto) => (
          <div key={producto.id}>
            <Item
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.img}
              id={producto.id}
            />
          </div>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default React.memo (ItemList);
