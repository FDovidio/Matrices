import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {

  return (
    <div className='header'>
    <Heading  size='lg' fontSize='50px' >{greeting}</Heading>
    <p className='headerParrafo'>El primer e-commerce con el mejor catalogo de productos que llevara tu experiencia de mate al siguiente nivel</p>
    </div>
  )
}

export default ItemListContainer