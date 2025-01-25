const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { commentModerationController } = require("./moderation-controller");

app.use(bodyParser.json());

app.listen(4003, () => {
  console.log("Server is listening to 4003 port");
});

app.post("/event", commentModerationController);
