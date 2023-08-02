import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'




const ItemDetailContainer = () => {

  const {id} = useParams()

  

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


  return (
    <>
    <div className='contenedorItem'>
    {
    <ItemDetail 
    productos={articulos}
    />
    }
    </div>
    </>
  )
}

export default ItemDetailContainer