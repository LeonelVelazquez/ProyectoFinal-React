import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../storage/cartContext';
import "./cartContainer.css"
import Loader from '../Loader/Loader';

function CartContainer() {
    const { cart, removeItem, getTotalPriceInCart } = useContext(CartContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        setIsLoading(false);

    })



    if (isLoading)

        return (
            <center><Loader /></center>)

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
            <strong><p>El total de tu compra es de:$ {getTotalPriceInCart()}</p></strong>

        </div>


    );

}

export default CartContainer;
