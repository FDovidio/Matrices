import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Box,
  Spacer,
} from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'
import CardWidget from './CardWidget'

const Navbar = () => {
  return (
    
    <Flex>
      <Box >
      <h1>Matrices
      </h1>
      </Box>
      <Spacer/>
    <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
<Spacer/>
<Box >
  <CardWidget/>
</Box>

</Flex>
    
  )
}

export default Navbar