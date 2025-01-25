const {
  emitEventService,
  getAllEventsService,
} = require("./event-bus-service");

const eventListenerController = async (req, res) => {
  await emitEventService(req);
  return res.status(201).send({});
};

const getAllEventsController = (req, res) => {
  const response = getAllEventsService();
  console.log(response);
  return res.status(200).send(response);
};

module.exports = { eventListenerController, getAllEventsController };
