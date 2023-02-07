import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./cards.css";

function Cards(props) {
  const { id, title, price, detail, imgurl } = props;
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);
  const urlDetail = `/item/${id}`;

  let classToggleBtn;
  if (isActive) classToggleBtn = "item-card_favicon favorite";
  else classToggleBtn = "item-card_favicon";

  return (
    <div className="tarjetas">
      <div>
        <Link to={urlDetail}>
          <img width="300px" src={imgurl} alt="Imagen" />
        </Link>
        <center>
          <div>
            <h3>{title}</h3>
            <h4>$ {price}</h4>
            <p>{detail}</p>
          </div>
          <Link to={urlDetail}>
            <Button text={"Ver mas"} />
          </Link>
          <button className={classToggleBtn} onClick={handleClick}>
            ❤️
          </button>
        </center>
      </div>
    </div>
  );
}

export default Cards;
