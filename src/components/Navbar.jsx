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
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import AlertCart from "./AlertCart";
import { signOut } from "firebase/auth";
import { auth } from "../main";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const cartEmpty = () => {
    if (cart.length == 0) {
      return <AlertCart />;
    } else {
      <Link to={"/cart"}>
        <CartWidget />
      </Link>;
    }
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
      });
  };

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
          <Link to={'/home'}>
          <MenuItem>Inicio</MenuItem>
          </Link>
          <Link to ={'/about'}>
          <MenuItem>Quienes Somos</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <Spacer />
      <Box p="2" display='flex'>
      <Button variant='outline' marginRight='10px' onClick={handleLogout}>
        Log Out
      </Button>
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
