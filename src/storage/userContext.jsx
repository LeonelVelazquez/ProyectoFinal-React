import React, { createContext, useState } from 'react';

export const CartContext = createContext();

 export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);


    const texto = "text"

    return (
        <CartContext.Provider value={{ cart, texto }}>
            {children}
        </CartContext.Provider>
    );
};