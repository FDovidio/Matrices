import { useParams } from "react-router-dom";
import React from "react";
import { Flex, Heading, Image } from "@chakra-ui/react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      fetch("/catalogo.json")
        .then((response) => {
          return response.json();
        })
        .then((articulos) => {
          const filteredCategory = articulos.filter(
            (articulo) => articulo.categoria == category
          );
          setArticulos(filteredCategory);
        });
    } else {
      fetch("/catalogo.json")
        .then((response) => {
          return response.json();
        })
        .then((articulos) => {
          setArticulos(articulos);
        });
    }
  }, [category]);

  const [articulos, setArticulos] = useState([]);

  return (
    <>
      <div className="header">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/5346/5346913.png"
          alt="Dan Abramov"
          boxSize="80px"
        />
        <Heading>{greeting}</Heading>
      </div>
      <div className="grillaProductos">
        <ItemList articulos={articulos} />
      </div>
    </>
  );
};

export default ItemListContainer;
