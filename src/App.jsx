import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import About from "./components/About";
import Cart from "./components/Cart";
import Greeting from "./components/Greeting";
import Form from "./components/Form";
import {ShoppingCartProvider} from "../src/context/ShoppingCartContext";
import Signup from "../src/components/Singup";
import Login from "../src/components/Login";




import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {


  return (
    <ShoppingCartProvider>
    <BrowserRouter>
      <div className="bodyApp">
        <Navbar/>
        <Routes>
          <Route
            exact
            path="/home"
            element={<ItemListContainer greeting={<Greeting />}  />}
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/form" element={<Form />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route
            exact
            path="/category/:category"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>   
        <Footer />
      </div>
      
    </BrowserRouter> 
  </ShoppingCartProvider>


  );
};

export default App;
