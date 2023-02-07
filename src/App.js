import { createContext } from "react";

import "./App.css";
import Navbar from "./components/navegacion/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import { BrowserRouter , Routes, Route, } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import React from "react";
import { userContext, UserContextProvider } from "./storage/userContext";
import { CartContextProvider } from "./storage/cartContext";


function App() {

  return (
    <>
    
    <CartContextProvider>
      <div className="App">
        <BrowserRouter> 
          <Navbar/>
          <Routes>
            
            <Route path="/" element={<ItemListContainer /> } />
            <Route path="/category/:id" element={<ItemListContainer /> } />
            <Route path="/item/:itemid" element={<ItemDetailContainer /> } />
          </Routes>
          
        </BrowserRouter>
        
      </div>
      </CartContextProvider>
    </>
  );
}

export default App;