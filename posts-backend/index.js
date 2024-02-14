const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { createProduct, getProducts } = require("./posts-controller");

app.use(cors());
app.use(bodyParser.json());

app.listen(4000, () => {
  console.log("Server is listening to 4000 port");
});

app.get("/posts", getProducts);

app.post("/posts", createProduct);
