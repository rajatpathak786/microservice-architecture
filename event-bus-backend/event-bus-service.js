const axios = require("axios");
const events = [];

const emitEventService = async (req) => {
  const event = req.body;
  events.push(event);
  await axios
    .post(`http://${process.env.HOST_POSTS_BACKEND}:4000/event`, req.body)
    .catch((err) => console.log(err.message));
  await axios
    .post(`http://${process.env.HOST_COMMENT_BACKEND}:4001/event`, req.body)
    .catch((err) => console.log(err.message));
  await axios
    .post(`http://${process.env.HOST_QUERY_BACKEND}:4002/event`, req.body)
    .catch((err) => console.log(err.message));
  await axios
    .post(`http://${process.env.HOST_MODERATION_BACKEND}:4003/event`, req.body)
    .catch((err) => console.log(err.message));
  return;
};

const getAllEventsService = () => events;

module.exports = { emitEventService, getAllEventsService };
