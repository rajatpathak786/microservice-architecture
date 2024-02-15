const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { eventListenerController } = require("./event-bus-controller");

app.use(cors());
app.use(bodyParser.json());

app.listen(4005, () => {
  console.log("Server is listening to 4005 port");
});

app.post("/event", eventListenerController);
