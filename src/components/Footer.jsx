import React from 'react'
import { Box, Flex, Spacer, Image, UnorderedList, ListItem } from '@chakra-ui/react'



const Footer = () => {
    return (
      <div className='footer'>
        <Flex bg="#9fac82">
          <Box p="3">
        <ul className='footerUl'>
            <li><a href="">Inicio</a></li>
            <li><a href="">Quienes Somos</a></li>
            <li><a href="">Contacto</a></li>
        </ul>
        </Box>
          <Spacer />
          <Box>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5346/5346913.png"
              alt="Dan Abramov"
              boxSize="37px"
              m="7"
            />
          </Box>
          <Spacer />
          <Box m="3" fontSize='25px' paddingTop='15px'>
        Matrices ©️
        </Box>
        </Flex>
        </div>
      );
}

export default Footer