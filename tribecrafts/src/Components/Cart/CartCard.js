import React, { useState, useEffect } from "react";
import axios from "axios";
import "./cart.css";
const CartCard = () => {
  let [currNum, setNum] = useState(1);
  const [cartItems, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let totalval = 0;
  let count = 0;
  let id = localStorage.getItem("id");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/cart/${id}`)
      .then((resp) => {
        setItems(resp.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div>..Loading</div>;
  }

  const removeItem = (product_id, custId) => {
    window.location.reload();
    axios
      .post(`http://localhost:5000/cart/${id}`, { product_id, custId })
      .then((response) => {
        setItems(response.data);
        // Handle successful user creation
      })
      .catch((error) => {
        // setMessage(error.response.data);
        console.log(error);
      });
  };

  const clearItems = () => {
    window.location.reload();
    axios
      .delete(`http://localhost:5000/cart/${id}`)
      .then((response) => {
        setItems(response.data);
        // Handle successful user creation
      })
      .catch((error) => {
        // setMessage(error.response.data);
        console.log(error);
      });
  };

  let plus = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-plus"
      viewBox="0 0 16 16"
    >
      {" "}
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
    </svg>
  );

  let minus = (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 8H4V7H11V8Z"
        fill="black"
      />{" "}
    </svg>
  );

  let Delete = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      class="bi bi-x"
      viewBox="0 0 16 16"
    >
      {" "}
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
    </svg>
  );

  let location = (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="30"
      fill="currentColor"
      class="bi bi-x"
    >
      <path
        fill="currentColor"
        d="M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
      />
      <path
        fill="currentColor"
        d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
      />
      <path
        fill="currentColor"
        d="M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"
      />
    </svg>
  );

  let cust_id = localStorage.getItem("id");
  for (let i = 0; i < cartItems.length; i++) {
    totalval += cartItems[i].price * currNum;
    count = i;
  }
  let address = localStorage.getItem("address");
  return (
    <div>
      <div>
        <div className="address">
          {location} Deliver to : <span className="add-glow"> {address}</span>
        </div>
        {cartItems.map((Item) => {
          return (
            <div className="item">
              <div className="image">
                <img src={Item.image} alt="" className="imgSize" />
              </div>
              <div class="description">
                <h4>{Item.title}</h4>
                <span>{Item.category}</span>
              </div>
              <div className="quantity">
                <button
                  class="plus-btn"
                  type="button"
                  name="button"
                  onClick={() => setNum(currNum + 1)}
                >
                  {plus}
                </button>
                <input type="text" name="name" value={currNum} />
                <button
                  classNa="minus-btn"
                  type="button"
                  name="button"
                  onClick={() =>
                    currNum > 1 ? setNum(currNum - 1) : setNum(1)
                  }
                >
                  {minus}
                </button>
              </div>
              <div className="total-price">{`Rs.${Item.price * currNum}`}</div>
              <div className="buttons">
                <span
                  className="delete-btn"
                  onClick={() => removeItem(Item.product_id, cust_id)}
                >
                  {Delete}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total">Total:{totalval}</div>
      <div className="total">Number of Items:{totalval ? count + 1 : 0}</div>
      <div className="purchase-button" onClick={() => clearItems()}>
        <button className="css-button-3d--blue">Purchase</button>
      </div>
    </div>
  );
};

export default CartCard;
