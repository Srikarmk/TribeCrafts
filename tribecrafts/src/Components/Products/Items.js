import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Items.css";

const Items = () => {
  const [ItemList, setdata] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  let id = localStorage.getItem("id");

  useEffect(() => {
    axios
      .get("http://localhost:5000/product")
      .then((resp) => {
        setdata(resp.data);
        // console.log("resp", resp.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>..Loading</div>;
  }

  function handleAddToCart(product_id, custId) {
    window.location.reload();
    axios
      .put(`http://localhost:5000/cart/${id}`, { product_id, custId })
      .then((response) => {
        setCartItems(response.data);
        // Handle successful user creation
      })
      .catch((error) => {
        // setMessage(error.response.data);
        console.log(error);
      });
    // setCartItems([...cartItems,{title,img,category,price}]);
  }

  let cust_Id = localStorage.getItem("id");
  const cartIcon = (
    <svg
      className="outCart"
      xmlns="<http://www.w3.org/2000/svg>"
      viewBox="0 0 64 64"
    >
      <path d="M2 6h10l10 40h32l8-24H16"></path>
      <circle cx="23" cy="54" r="4"></circle>
      <circle cx="49" cy="54" r="4"></circle>
    </svg>
  );

  return (
    <>
      {
        <div className="container">
          {ItemList.map((Item) => {
            return (
              <div className="row">
                <Card
                  title={Item.title}
                  image={Item.image}
                  category={Item.category}
                  price={Item.price}
                  currency={Item.currency}
                  alt={Item.alt}
                  icon={
                    <div
                      className="cart"
                      onClick={() => handleAddToCart(Item.product_id, cust_Id)}
                    >
                      {cartIcon}
                    </div>
                  }
                  details={Item.details}
                />
              </div>
            );
          })}
        </div>
      }
    </>
  );
};

export default Items;
