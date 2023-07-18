import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Box,
  Spacer,
  Image,
  MenuDivider,
  MenuGroup,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import CardWidget from "./CardWidget";

const Navbar = () => {
  return (
    <Flex bg="#9fac82">
      <Menu>
        <MenuButton
          as={Button}
          leftIcon={<HamburgerIcon />}
          bg="#9fac82"
          mt="2"
        >
          Matrices
        </MenuButton>
        <MenuList>
          <MenuGroup title="Productos">
            <MenuItem>Mates</MenuItem>
            <MenuItem>Yerba</MenuItem>
            <MenuItem>Bombillas</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuItem>Quienes Somos</MenuItem>
          <MenuItem>Contacto</MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      <Box>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/5346/5346913.png"
          alt="Dan Abramov"
          boxSize="37px"
          m="2"
        />
      </Box>
      <Spacer />
      <Box p="2">
        <CardWidget />
      </Box>
    </Flex>
  );
};

export default Navbar;
