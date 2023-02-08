import React, { useContext } from 'react'
import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getSingleItem } from '../../services/mockAsyncService'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext, CartContextProvider } from '../../storage/cartContext'
import "./ItemDetail.css"
import { cartContext } from '../../storage/userContext'


function ItemDetailContainer() {
  const [item, setItem] = useState({})
  const {itemid} =useParams()
  const {cart, texto,} = useContext(CartContext)
  const {addItem, removeItem, clearCart } = useContext(CartContext) 


  const onAdd = (qty) => {
    alert(`Agregaste  ${item.title} al carrito`);
    addItem(item,qty)
    };

 

  console.log(cart)
  console.log(texto)

useEffect(()=>{
  getSingleItem(itemid)
  .then((respuesta) => {
    setItem(respuesta);
  })
},[itemid])


  return (

    <center>
      
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={item.imgurl}alt={item.title} />
      </div>
      <div className="card-detail_detail">
        <h1>{item.title}</h1>
        <h2 ClassName="priceTag"> $ {item.price}</h2>
        <small>{item.detail}</small>
        <small><ItemCount onAdd={onAdd} initial={1} stock={7} /></small>
       <small><button onClick={()=> removeItem(item.id)}>Eliminar</button></small>
       <small><button onClick={()=> clearCart()}>Borrar carrito</button></small>
      </div>

    </div>
    </center>
  )
}

export default ItemDetailContainer