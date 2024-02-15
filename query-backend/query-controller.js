const {
  getAllPostsService,
  framePostAndCommentService,
} = require("./query-service");

const getPostsController = (req, res) => {
  const response = getAllPostsService();
  res.status(200).json(response);
};

const framePostAndCommentController = (req, res) => {
  const response = framePostAndCommentService(req);
  res.status(201).json(response);
};

module.exports = {
  getPostsController,
  framePostAndCommentController,
};
