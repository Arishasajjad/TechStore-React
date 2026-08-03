import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import "./App.css";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

import { CartContext } from "./context/CartContext";


function App() {


  const { message } = useContext(CartContext);



  return (

    <BrowserRouter>


      {message && (

        <div className="toast-container">

          <div className="toast">

            {message}

          </div>

        </div>

      )}



      <Routes>


        <Route 
          path="/" 
          element={<Home />} 
        />


        <Route 
          path="/products" 
          element={<Products />} 
        />


        <Route 
          path="/products/:id" 
          element={<ProductDetails />} 
        />


        <Route 
          path="/about" 
          element={<About />} 
        />


        <Route 
          path="/contact" 
          element={<Contact />} 
        />


        <Route 
          path="/cart" 
          element={<Cart />} 
        />


      </Routes>


    </BrowserRouter>

  );

}


export default App;