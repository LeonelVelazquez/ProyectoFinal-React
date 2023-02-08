import ItemCount from "../components/ItemCount/ItemCount";

const { createContext, useState } = require("react");

export const cartContext = createContext();

export const CartContextProvider = ({children}) => {

function getTotalItems(){
    return cart.length
}

    const [cart, setCart] = useState([])


    return (
        <cartContext.Provider value={ cart }>
            {children}
        </cartContext.Provider>
    )

}
    
    