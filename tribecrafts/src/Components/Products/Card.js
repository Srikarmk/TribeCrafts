import React from "react";
import CartCard from "../Cart/CartCard";

import "./Items.css";
export default function Card(props) {
  let CardName = `color_bg ${props.alt}`;
  let bg_img = `url(${props.image})`;
  let { title, category, price, currency, icon, details } = props;
  return (
    <div className="cards">
      <div className="wrapper">
        <div className={CardName}></div>
        <div className="card_img" style={{ backgroundImage: bg_img }}>
          <div className="overlay-wrapper">
            <p className="overlay-text">{details}</p>
          </div>
        </div>
        <div className="cardInfo">
          <h1>{title}</h1>
          <div className="action">
            <div className="priceGroup">
              <p className="price category">{category}</p>
              <p className="price Price">
                {currency}
                {price}
              </p>
            </div>
            <div>{icon}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
