const { emitEventService } = require("./event-bus-service");

const eventListenerController = async (req, res) => {
  await emitEventService(req);
  return res.status(201).send({});
};

module.exports = { eventListenerController };
