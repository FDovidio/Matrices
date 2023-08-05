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
import { HamburgerIcon } from "@chakra-ui/icons";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

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
            <Link to={`/category/${"Mates"}`}>
              <MenuItem>Mates</MenuItem>
            </Link>
            <Link to={`/category/${"Yerbas"}`}>
              <MenuItem>Yerba</MenuItem>
            </Link>
            <Link to={`/category/${"Termos"}`}>
              <MenuItem>Termos</MenuItem>
            </Link>
            <Link to={`/category/${"Otros"}`}>
              <MenuItem>Otros</MenuItem>
            </Link>
          </MenuGroup>
          <MenuDivider />
          <MenuItem>Quienes Somos</MenuItem>
          <MenuItem>Contacto</MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      <Box>
        <Link to={"/"}>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/5346/5346913.png"
            alt="Dan Abramov"
            boxSize="37px"
            m="2"
          />
        </Link>
      </Box>
      <Spacer />
      <Box p="2">
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
