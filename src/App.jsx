import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Greeting from "./components/Greeting";
import Form from "./components/Form";
import ShoppingCartContext from "../src/context/ShoppingCartContext";







import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    
    <BrowserRouter>
      <div className="bodyApp">
        <Navbar />

        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer greeting={<Greeting />} />}
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          
          <Route exact path="/cart" element={
            <ShoppingCartContext>
           <Cart />
           </ShoppingCartContext>
          } />
          
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



  );
};

export default App;
