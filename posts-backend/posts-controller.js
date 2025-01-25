const {
  getAllPostsService,
  addPostService,
  eventListenerService,
} = require("./posts-service");

const getPostsController = (req, res) => {
  const response = getAllPostsService();
  res.status(200).json(response);
};

const createPostController = async (req, res) => {
  const response = await addPostService(req.body);
  res.status(201).json(response);
};

const eventListenerController = (req, res) => {
  const response = eventListenerService(req);
  res.status(201).send({});
};

module.exports = {
  getPostsController,
  createPostController,
  eventListenerController,
};
