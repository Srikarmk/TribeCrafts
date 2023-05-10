import React from "react";

const Footer = () => {
  return (
    <div>
      <section id="contact">
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>Footer 2</title>
            <link rel="stylesheet" href="./Footer2.css" />
            <script
              src="https://kit.fontawesome.com/66aa7c98b3.js"
              crossorigin="anonymous"
            ></script>
          </head>
          <body>
            <div class="footer">
              <div class="heading">
                <h2>Contact Us</h2>
              </div>
              <div class="content">
                <div class="services">
                  <h4>Quick links</h4>
                  <p>
                    <a href="#home">Home</a>
                  </p>
                  <p>
                    <a href="#shop">Shop</a>
                  </p>
                  <p>
                    <a href="#">Cart</a>
                  </p>
                </div>
                <div class="links">
                  <h4>Categories</h4>
                  <p>
                    <a href="#">Art</a>
                  </p>
                  <p>
                    <a href="#">Clothing</a>
                  </p>
                  <p>
                    <a href="#">Jewellery</a>
                  </p>
                  <p>
                    <a href="#">Accessories</a>
                  </p>
                  <p>
                    <a href="#">Novelties</a>
                  </p>
                </div>
                <div class="details">
                  <h4 class="address">Tribe-Crafts</h4>
                  <p>Art from the heart of India</p>
                  <h4 class="mobile">Mobile</h4>
                  <p>
                    <a href="#">+91 XXXXXXXXXX</a>
                  </p>
                  <h4 class="mail">Email</h4>
                  <p>
                    <a href="#">tribecrafts@gmail.com</a>
                  </p>
                </div>
              </div>
              <footer>
                <hr />
                &copy; 2023 TribeCrafts Pvt. Ltd.
              </footer>
            </div>
          </body>
        </html>
      </section>
    </div>
  );
};

export default Footer;
