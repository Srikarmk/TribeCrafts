import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [title, setTitle] = useState("");
  const [category, setcategory] = useState("");
  const [image, setimage] = useState("");
  const [currency, setcurrency] = useState("");
  const [alt, setalt] = useState("");
  const [price, setprice] = useState("");
  const [Message, setMessage] = useState("");
  const [details, setdetails] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/product", {
        title,
        image,
        category,
        currency,
        price,
        alt,
        details,
      })
      .then((response) => {
        setMessage(response.data);
        // Handle successful user creation
      })
      .catch((error) => {
        setMessage(error.response.data);
      });
  }
  let isSubmitted = false;
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            required
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Image Link</label>
          <input
            type="text"
            name="image"
            value={image}
            required
            onChange={(event) => setimage(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Category</label>
          <input
            list="category"
            name="category"
            id="catg"
            onChange={(event) => setcategory(event.target.value)}
          />
          <datalist id="category">
            <option value="Art" />
            <option value="Jewellery" />
            <option value="Clothing" />
            <option value="Accessories" />
            <option value="Novelties" />
          </datalist>
        </div>
        <div className="input-container">
          <label>Currency</label>
          <input
            type="text"
            name="currency"
            value={currency}
            required
            onChange={(event) => setcurrency(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Price</label>
          <input
            type="text"
            name="price"
            value={price}
            required
            onChange={(event) => setprice(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Alt (If image fails to load enter a text)</label>
          <input
            type="text"
            name="alt"
            value={alt}
            required
            onChange={(event) => setalt(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Product Details</label>
          <input
            type="text"
            name="alt"
            value={details}
            required
            onChange={(event) => setdetails(event.target.value)}
          />
        </div>

        <div className="button-container">
          <input type="submit" value={"Add"} />
        </div>
        {Message && <div>{Message}</div>}
      </form>
    </div>
  );
  return (
    <div className="app">
      <h1>TribeCrafts</h1>
      <Link to="/Auth" className="removeUnder">
        Back
      </Link>
      <div className="login-form">
        <div className="title">Add Product details</div>
        {isSubmitted ? <Navigate to="/" /> : renderForm}
      </div>
    </div>
  );
};

export default Signup;
