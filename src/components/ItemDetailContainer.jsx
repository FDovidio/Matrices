import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
  useEffect(() => {
    fetch("/catalogo.json")
      .then((response) => {
        return response.json();
      })
      .then((articulos) => {
        setArticulos(articulos);
      });
  }, []);

  const [articulos, setArticulos] = useState([]);

  return (
    <div className="contenedorItemDetail">
      {<ItemDetail articulos={articulos} />}
    </div>
  );
};

export default ItemDetailContainer;
