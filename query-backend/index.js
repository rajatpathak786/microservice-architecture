const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  framePostAndCommentController,
  getPostsController,
  queryPendingEventsController,
} = require("./query-controller");

app.use(cors());
app.use(bodyParser.json());

app.listen(4002, async () => {
  console.log("Server is listening to 4002 port");
  await queryPendingEventsController();
});

app.post("/event", framePostAndCommentController);
app.get("/posts", getPostsController);
