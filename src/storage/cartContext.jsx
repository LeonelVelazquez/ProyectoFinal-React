import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    let [total, setTotal] = useState(0)


    const removeItem = (id) => {
        const arrayFiltrado = cart.filter((prod) => prod.id !== id)
        setCart(arrayFiltrado)
    }

    const clearCart = () => {
        setCart([])
    }


    const getTotalItem = () => {
        return cart.reduce((acc, prod) => acc += prod.amount, 0)
    }



    function getTotalPriceInCart() {
        return 999;

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
                if (prod.id === item.id) {
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
        <CartContext.Provider value={{ cart, texto, addItem, getTotalItem, getTotalPriceInCart, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

