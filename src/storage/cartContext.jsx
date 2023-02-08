import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

const [cart, setCart] = useState([]);

let [total, setTotal] = useState(0)

function getTotalItem(){

}

const isInCart = (id) => {
    return cart.some((e) => e.id === id);
};

const texto = "text"

const addItem = (item, amount) => {
    let itemAmount = { ...item, amount };
    if (!isInCart(item.id)) {
        setCart([...cart, itemAmount]);
    } else {
        
        const newProducts = cart.map(prod => {
            if(prod.id === item.id) {
                const newProduct = {
                    ...prod,
                    amount: prod.amount + amount
                }
                return newProduct
            } else {
                return prod
            }
        })

        setCart(newProducts)
    }
};


return (
<CartContext.Provider value={{ cart, texto }}>
{children}
</CartContext.Provider>
);
};

