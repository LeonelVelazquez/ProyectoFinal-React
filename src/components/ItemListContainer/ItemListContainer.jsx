import { useState, useEffect } from "react";
import React from "react";
import getItems from "../../services/mockAsyncService";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer() {
  const [item, setItem] = useState([]);
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getItems().then((respuesta) => {
      if (id) {
        setItem(respuesta.filter((prod) => prod.category === id))
      } else {

        setItem(respuesta)
        setIsLoading(false)
      }
    });
  }, [id]);

  if (isLoading)
    return <Loader/>

  return (
    
      <div>
        <ItemList item={item} />
      </div>
    
  )

}

export default ItemListContainer;
