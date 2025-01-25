const {
  getAllPostsService,
  framePostAndCommentService,
  queryPendingEventsService,
} = require("./query-service");

const getPostsController = (req, res) => {
  const response = getAllPostsService();
  res.status(200).json(response);
};

const framePostAndCommentController = (req, res) => {
  const response = framePostAndCommentService(req);
  res.status(201).json(response);
};

const queryPendingEventsController = async () => {
  return await queryPendingEventsService();
};

module.exports = {
  getPostsController,
  framePostAndCommentController,
  queryPendingEventsController,
};
