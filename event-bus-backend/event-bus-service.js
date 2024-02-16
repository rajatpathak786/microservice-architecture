const axios = require("axios");
const events = [];

const emitEventService = async (req) => {
  const event = req.body;
  events.push(event);
  await axios
    .post(`http://localhost:4000/event`, req.body)
    .catch((err) => console.log(err.message));
  await axios
    .post(`http://localhost:4001/event`, req.body)
    .catch((err) => console.log(err.message));
  await axios
    .post(`http://localhost:4002/event`, req.body)
    .catch((err) => console.log(err.message));
  await axios
    .post(`http://localhost:4003/event`, req.body)
    .catch((err) => console.log(err.message));
  return;
};

const getAllEventsService = () => events;

module.exports = { emitEventService, getAllEventsService };
