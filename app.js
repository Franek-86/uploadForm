require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connectDB");
const notFound = require("./middleware/notFound");
const fileUpload = require("express-fileupload");
const errorHandler = require("./middleware/errorHandler");
const test = require("cloudinary").v2;
// const json = require("express-json");
const ProductRouter = require("./routing/productRouting");
const app = express();
const port = process.env.PORT || 3000;
// app.get("/", (req, res) => {
//   res.send("<h1>ciao a tutti</h1>");
// });
test.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use(express.static("./public"));
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use("/api/v1/products", ProductRouter);
app.use(("( * )", notFound));
app.use(errorHandler);
app.listen(port, () => {
  connectDB(process.env.MONGO_URI);
  console.log(`it's listening on port ${port}`);
});
