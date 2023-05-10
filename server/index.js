const express = require("express");
const app = express();
app.use(express.json()); // To destructure objects in post method

var cors = require("cors"); //cross origin resource sharing - to avoid resouce sharing on frontend
app.use(cors());
//connecting to your localhost database
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Saisrikar1",
  database: "tribe_crafts",
});

// To get the product table data
app.get("/product", (req, res) => {
  connection.query("SELECT * from product", (err, values) => {
    if (err) {
      throw err;
    } else {
      res.send(values);
    }
  });
});

//To get the customer table for login auth

app.get("/customers", (req, res) => {
  connection.query("SELECT * from customer", (err, values) => {
    if (err) {
      throw err;
    } else {
      res.send(values);
    }
  });
});

// To post the data from sign up page on frontend to database

app.post("/customers", (req, res) => {
  const { customer_name, pasword, contact_no, Email, address } = req.body; // Destructuring data
  connection.query(
    "INSERT INTO customer (customer_name, pasword,contact_no,Email,address) VALUES (?, ?, ?, ?, ?)",
    [customer_name, pasword, contact_no, Email, address],
    (err, results) => {
      if (err) {
        res.status(409).send("Username already exists , Please Login"); // Conflict - If username is not UNIQUE
        console.log(err);
      } else {
        res.status(201).send("User created successfully , Please login"); // Successfull Request / User is created
      }
    }
  );
});

app.get("/seller", (req, res) => {
  connection.query("SELECT * from seller", (err, values) => {
    if (err) {
      throw err;
    } else {
      res.send(values);
    }
  });
});

app.post("/product", (req, res) => {
  const { title, image, category, currency, price, alt,details } = req.body; // Destructuring data
  connection.query(
    "INSERT INTO product (title,image,category,price,currency,alt,details) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [title, image, category, price, currency, alt,details],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).send("Product Added successfully");
      }
    }
  );
});

app.get("/cart/:customerC_Id", (req, res) => {
  let id = req.params.customerC_Id;
  connection.query(
    `SELECT * FROM product WHERE product_id IN (SELECT product_id FROM cart_item WHERE customerC_Id IN (SELECT customerC_Id FROM customer WHERE customerC_Id=${id}));`,
    (err, values) => {
      if (err) throw err;
      else {
        console.log(values);
        res.send(values);
      }
    }
  );
});

app.post(`/cart/:customerC_Id`, (req, res) => {
  const { product_id, custId } = req.body; // Destructuring data
  connection.query(
    `DELETE FROM cart_item WHERE product_id=${product_id} AND customerC_Id=${custId};`,
    (err, results) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

app.put(`/cart/:customerC_Id`, (req, res) => {
  const { product_id, custId } = req.body; // Destructuring data
  connection.query(
    `Insert into cart_item (product_id,customerC_Id) values(${product_id},${custId})`,
    (err, results) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

app.delete(`/cart/:customerC_Id`, (req, res) => {
  const id = req.params.customerC_Id;
  // console.log(custId) // Destructuring data
  connection.query(
    `DELETE FROM cart_item WHERE customerC_Id=${id};`,
    (err, results) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

app.listen(5000); //The port where the backend api's are live
