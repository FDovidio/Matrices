import React from 'react'
import {Card, CardBody, Image, Box} from '@chakra-ui/react'
import {Link} from 'react-router-dom'



const About = () => {
  return (
    <Card m='10px' bg='white' borderRadius='10px' boxShadow='md' p='10px' opacity='70%'>
      <Box display='flex' justifyContent='center'>
        <Link to={'/home'}>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/5346/5346913.png"
          alt="Dan Abramov"
          boxSize="80px"
        />
        </Link>
        </Box>
      <CardBody fontWeight='bold' color='black'>
      Bienvenido a Matrices, e-comerce especializado en productos de yerba mate, el lugar perfecto para los amantes de esta tradicional y energizante infusión. Explora nuestra amplia selección de yerbas de primera calidad, cuidadosamente seleccionadas de las mejores regiones productoras. Además, encontrarás una variedad de mates artesanales en diferentes estilos y materiales, como los clásicos de calabaza o palo santo. Nuestra tienda también ofrece una gama de accesorios imprescindibles, como bombillas únicas, termos de alta calidad para mantener el agua caliente y otros complementos para disfrutar al máximo de tu experiencia con la yerba mate. Ya sea que estés buscando productos tradicionales o contemporáneos, estamos comprometidos en proporcionarte todo lo que necesitas para disfrutar de esta apasionante bebida. Únete a nosotros y descubre la auténtica cultura de la yerba mate a través de nuestros productos excepcionales.
      </CardBody>
      </Card>
  )
}

export default About