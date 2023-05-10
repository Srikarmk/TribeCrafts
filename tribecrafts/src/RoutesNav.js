import React from "react";
import App from "./App";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Categories from "./Components/Products/Categories";
import Shop from "./Components/Products/Shop";
import Footer from "./Components/SignUp/Footer";
import Cart from "./Components/Cart/Cart";
import "./Navbar.css";
import AuthPage from "./Components/SignUp/AuthPage";
import Login from "./Components/SignUp/Login";
import Signup from "./Components/SignUp/Signup";
import SellerLogin from "./Components/SignUp/SellerLogin";
import SellerForm from "./Components/SignUp/SellerForm";
export const RoutesNav = () => {
  return (
    <div>
      <Navbar />
      <Routes forceRefresh={true}>
        <Route exact path="/" element={<App></App>} />
        <Route exact path="/Home" element={<App></App>} />
        <Route exact path="/Categories" element={<Categories></Categories>} />
        <Route exact path="/Shop" element={<Shop></Shop>} />
        <Route exact path="/ContactUs" element={<Footer></Footer>} />
        <Route exact path="/Auth" element={<AuthPage></AuthPage>} />
        <Route exact path="/Cart" element={<Cart></Cart>} />
        <Route exact path="/login" element={<Login></Login>} />
        <Route exact path="/signup" element={<Signup></Signup>} />
        <Route exact path="/sellerlogin" element={<SellerLogin></SellerLogin>}
        />
        <Route exact path="/sellerform" element={<SellerForm></SellerForm>} />
      </Routes>
    </div>
  );
};
