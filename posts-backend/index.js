const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  createPostController,
  getPostsController,
  eventListenerController,
} = require("./posts-controller");

app.use(cors());
app.use(bodyParser.json());

app.listen(4000, () => {
  console.log("Server is listening to 4000 port");
});

app.get("/posts", getPostsController);
app.post("/posts/create", createPostController);
app.post("/event", eventListenerController);
