const express = require("express");
const router = express.Router();
const { createProduct, getAllProducts } = require("../controllers/product");
const { uploadProduct } = require("../controllers/upload");
router.route("/").get(getAllProducts).post(createProduct);
router.route("/uploads").post(uploadProduct);
module.exports = router;
