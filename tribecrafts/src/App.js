import React from "react";
import "./style.css";
import board from "./board.png";
import Footer from "./Components/SignUp/Footer";
import Categories from "./Components/Products/Categories";
import Shop from "./Components/Products/Shop";

function App() {
  return (
    <div className="App">
      <section id="home">
        <div className="landing">
          <div className="landing-left">
            <h1>Tribal Art from the vast global cultures !</h1>
            <p className="landing-caption">
              Tribal art and items have been an antique and special demand from
              various collectors and admirers.Buy your favourite product from a
              wide variety of categories we provide.
            </p>

            <a href="#shop" className="shop-now">
              {" "}
              <button className="css-button-neumorphic">Shop Now</button>
            </a>
          </div>
          <div className="landing-right">
            <img src={board} alt="Paintings" />
          </div>
        </div>
      </section>
      <Categories></Categories>
      <Shop></Shop>
      <Footer />
    </div>
  );
}

export default App;
