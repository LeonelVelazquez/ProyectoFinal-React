import ItemCount from "../components/ItemCount/ItemCount";

const { createContext, useState } = require("react");

export const cartContext = createContext();

export function CartContextProvider(props) {
    let [cart, setCart] = useState([])

    

    const value = { cart, setCart,  }

    return (
        <cartContext.Provider value={{ value }}>{props.children}</cartContext.Provider>)
}