const Product = require("../model/productModel");

const createProduct = async (req, res) => {
  const newProduct = req.body;

  const product = await Product.create(newProduct);
  res.json({ product });
};
const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.json({ products });
};

module.exports = { createProduct, getAllProducts };
