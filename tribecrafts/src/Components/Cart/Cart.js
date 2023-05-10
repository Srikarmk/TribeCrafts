import React from "react";
import "./cart.css";
import { AuthCart } from "./AuthCart";
import CartCard from "./CartCard";

const Cart = () => {
  const cust_cart = localStorage.getItem("Username");
  let signedIn = "";
  cust_cart ? (signedIn = true) : (signedIn = false);

  return (
    <div>
      <div class="shopping-cart">
        {signedIn ? <CartCard></CartCard> : <AuthCart />}
      </div>
    </div>
  );
};

export default Cart;
