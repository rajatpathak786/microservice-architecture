const { addCommentService, getAllCommentsByPostIdService, eventListenerService } = require("./comment-service");

const getCommentsByPostIdController = (req, res) => {
  const response = getAllCommentsByPostIdService(req);
  res.status(200).json(response);
};

const createCommentController = async (req, res) => {
  const response = await addCommentService(req);
  res.status(201).json(response);
};

const eventListenerController = (req, res) => {
  const response = eventListenerService(req);
  res.status(201).send({});
}

module.exports = {
  getCommentsByPostIdController,
  createCommentController,
  eventListenerController
};
