import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [customer_name, setUsername] = useState("");
  const [pasword, setPassword] = useState("");
  const [Email,setEmail]=useState("");
  const [contact_no,setcontact_no]=useState("");
  const [address,setaddress] =useState("");
  const [Message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/customers", { customer_name, pasword,contact_no,Email,address })
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
          <label>Username </label>
          <input
            type="text"
            name="uname"
            value={customer_name}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            value={pasword}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Phone Number</label>
          <input
            type="text"
            name="phonenumber"
            value={contact_no}
            required
            onChange={(event) => setcontact_no(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Email Id</label>
          <input
            type="email"
            name="email"
            value={Email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={address}
            required
            onChange={(event) => setaddress(event.target.value)}
          />
        </div>
        <div className="button-container">
          <input type="submit" value={"Register"} />
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
        <div className="title">Sign Up</div>
        {isSubmitted ? <Navigate to="/login" /> : renderForm}
      </div>
    </div>
  );
};

export default Signup;
