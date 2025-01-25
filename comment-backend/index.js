const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  createCommentController,
  getCommentsByPostIdController,
  eventListenerController,
} = require("./comment-controller");

app.use(bodyParser.json());
app.use(cors());

app.listen(4001, () => {
  console.log("Server is listening to 4001 port");
});

app.get("/posts/:id/comment", getCommentsByPostIdController);
app.post("/posts/:id/comment", createCommentController);
app.post("/event", eventListenerController);
