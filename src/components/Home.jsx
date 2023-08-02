import React from 'react'
import { Heading, Image } from '@chakra-ui/react'

const Home = ({greeting}) => {
  return (
    <div className="header">
    <Image
      src="https://cdn-icons-png.flaticon.com/512/5346/5346913.png"
      alt="Dan Abramov"
      boxSize="80px"
    />
    <Heading m='1' size="lg" fontSize="50px">
      {greeting}
    </Heading>
    <p className="headerParrafo">
      El primer e-commerce con el mejor catalogo de productos que llevara tu
      experiencia de mate al siguiente nivel
    </p>
  </div>
  )
}

export default Home