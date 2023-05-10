import React from "react";
import Items from "./Items";

const Shop = () => {
  return (
    <div>
      <section id="shop">
        <h2> Shop Now </h2>
        <p className="warn-p">👇 Hover over the images to see the details !</p>
        <Items></Items>
      </section>
    </div>
  );
};

export default Shop;
