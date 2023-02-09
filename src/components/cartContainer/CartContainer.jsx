import React, { useContext } from 'react'
import { cartContext } from '../../storage/userContext'


function CartContainer() {
    const { cart } = useContext(cartContext)

    return (

        <div>
            <h1>Tu carrito</h1>
            <div>
                {
                    cart.map(item => (
                        <div className='cart-item'>
                            <h3>{item.title}</h3>
                            <img src={item.imgurl} alt="img" />
                            <p>{item.price}</p>
                            <p>{item.count}</p>
                        </div>

                    )
                    )
                }

            </div>
        </div>




    );

}

export default CartContainer;
