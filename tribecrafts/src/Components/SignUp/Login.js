import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import "./signup.css";
function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [database, setdata] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userName = useRef();
  const passWord = useRef();

  const nav_home = (
    <div>
      <Navigate to="/" />
    </div>
  );

  useEffect(() => {
    axios
      .get("http://localhost:5000/customers")
      .then((resp) => {
        setdata(resp.data);
        console.log("resp", resp.data);
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

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find(
      (user) => user.customer_name === uname.value
    );
    // Compare user info
    if (userData) {
      if (userData.pasword !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        let id = userData.customerC_Id;
        setIsSubmitted(true);
        localStorage.setItem("Username", userName.current.value);
        localStorage.setItem("Password", passWord.current.value);
        localStorage.setItem("id", id);
        localStorage.setItem("address", userData.address);
        localStorage.setItem("email", userData.Email);
        localStorage.setItem("contact_no", userData.contact_no);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" ref={userName} required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" ref={passWord} required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Login" />
        </div>
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
        <div className="title">Login</div>
        {isSubmitted ? nav_home : renderForm}
      </div>
    </div>
  );
}

export default Login;
