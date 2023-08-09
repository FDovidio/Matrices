import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";



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
    <ShoppingCartContext>
    <div className="contenedorItemDetail">
      {
        
        <ItemDetail articulos={articulos} />
       
        }
      
    </div> 
    </ShoppingCartContext>
  );
};

export default ItemDetailContainer;
