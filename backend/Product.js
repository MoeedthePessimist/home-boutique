const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model("Product", ProductSchema);
