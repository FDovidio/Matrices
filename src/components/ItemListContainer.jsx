import { useParams } from 'react-router-dom';
import React from "react";
import ItemList from "./ItemList";
import { useEffect, useState } from 'react'






const ItemListContainer = () => {

const {category} = useParams()

useEffect(() => {
  fetch('src/catalogo.json')
    .then((response) => {
      return response.json()
    })
    .then((articulos) => {
      setArticulos(articulos)
    })
}, [])

const [articulos, setArticulos] = useState([])

console.log(articulos)
  const filteredCategory = articulos.filter((articulo) => articulo.categoria==category)

  return (
    <>
    <div className="grillaProductos">
      <ItemList
      articulos = {filteredCategory}
       />    
      </div>
      
      </>
  );
};

export default ItemListContainer;
