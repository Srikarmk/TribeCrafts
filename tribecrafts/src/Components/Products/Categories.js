import React from "react";
import "../../style.css";

const Categories = () => {
  return (
    <div>
      <section id="categories">
        <h2>Our Categories</h2>
        <div className="categories">
          <div class="card">
            <img
              src="https://images.hindustantimes.com/img/2022/11/06/original/d49ecbaddac0c6cffe65988749ff6a4c_1667735207043.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="overlay__text">
                <h3>ART</h3>
              </div>
            </div>
          </div>
          <div class="card">
            <img
              src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15206544/2021/8/20/cf6ad5d7-b335-45af-9b22-c806ca27c40b1629449537200GermanOxidisedTribalSilverPearlandStonesChokerJewellerySet1.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="overlay__text">
                <h3>JEWELLERY</h3>
              </div>
            </div>
          </div>
          <div class="card">
            <img
              src="https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/88034/149623/1663069471536_20220913_150041__95474.1663326360.jpg?c=2"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="overlay__text">
                <h3>CLOTHING</h3>
              </div>
            </div>
          </div>
          <div class="card">
            <img
              src="https://www.tribesindia.com/wp-content/uploads/2020/09/1SGAUTLGJ01185_IMAGE_1.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="overlay__text">
                <h3>ACCESSORIES</h3>
              </div>
            </div>
          </div>
          <div class="card">
            <img
              src="https://www.tribesindia.com/wp-content/uploads/2021/08/1TGAUTCRJ01469-1.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="overlay__text">
                <h3>NOVELTIES</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
