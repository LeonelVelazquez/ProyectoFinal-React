import { useState, useEffect } from "react";
import React from "react";
import getItems from "../../services/mockAsyncService";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [item, setItem] = useState([]);
  const {id}=useParams()

  useEffect(() => {
    getItems().then((respuesta) => {
      if(id){
        setItem(respuesta.filter((prod)=> prod.category === id))
      }else{

        setItem(respuesta)
      }
    });
  }, [id]);

  return <ItemList item={item} />;
}

export default ItemListContainer;
