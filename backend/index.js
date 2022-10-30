const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Product = require("./Product.js");
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/products",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connection with mongoose was successful");
  }
);

// app.use("/", () => {
//   console.log("Hello from express");
// });

app.get("/products", async (req, res, next) => {
  const products = await Product.find();
  console.log(products);
  res.send(products);
});

app.post("/products", async (req, res, next) => {
  console.log(req.body);
  const product = new Product(req.body);
  console.log(product);
  const savedProduct = await product.save();
  console.log(savedProduct);
  res.send({
    data: savedProduct
  });
});

app.listen("6969", () => {
  console.log("application is running on port 6969");
});
