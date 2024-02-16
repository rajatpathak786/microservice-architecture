const axios = require("axios");

const commentModerationService = async (req) => {
  console.log(`Listening to event ${req.body.type}`);
  const { type, data } = req.body;
  const { content } = data;
  if (type === `CreateComment`) {
    content.includes(`New`) ? (data.status = `Rejected`) : (data.status = `Approved`);
    await axios.post(`http://localhost:4005/event`, {
      type: `CommentModerated`,
      data: { ...data },
    });
  }
  return;
};

module.exports = { commentModerationService };
