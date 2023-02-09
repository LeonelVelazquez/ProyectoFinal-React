import React, { useContext } from 'react'
import { CartContext } from '../../storage/cartContext';
import "./cartContainer.css"


function CartContainer() {
    const { cart, removeItem, getTotalPriceInCart } = useContext(CartContext)

    return (

        <div>
            <h1>Tu carrito</h1>
            <div className='products-cart'>
                {
                    cart.map(item => (
                        <div className='cart-item'>
                            <img src={item.imgurl} alt="img" />
                            <h3>{item.title}</h3>
                            <p>$ {item.price}</p>
                            <p>{item.detail}</p>
                            <p>{item.count}</p>
                            <button className='button-primary_clear' onClick={() => removeItem(item.id)}>x</button>
                        </div>
                    ))}
                    
            </div>
        <small>El total de tu compra es de:$ {getTotalPriceInCart}</small>

        </div>



    );

}

export default CartContainer;
