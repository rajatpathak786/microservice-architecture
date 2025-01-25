const { commentModerationService } = require("./moderation-service");

const commentModerationController = async (req, res) => {
  await commentModerationService(req);
  return res.status(201).send({});
};

module.exports = { commentModerationController };
