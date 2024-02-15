const axios = require("axios");
const comments = [];

const getAllCommentsByPostIdService = (req) => {
  const commentsByPostId = comments.find((o) =>
    o.hasOwnProperty(req.params.id)
  );
  return commentsByPostId;
};

const addCommentService = async (req) => {
  const comment = {
    id: comments.length + 1,
    content: req.body.content,
  };
  const commentsByPostId = comments.find((o) => {
    if (o.hasOwnProperty(req.params.id)) {
      o[req.params.id].push(comment);
      return o;
    }
  });
  if (commentsByPostId) {
    await emitEvent({ postId: req.params.id, ...comment });
    return comment;
  }
  await emitEvent({ postId: req.params.id, ...comment });
  comments.push({ [req.params.id]: [comment] });
  return comment;
};

const emitEvent = async (body) => {
  await axios.post(`http://localhost:4005/event`, {
    type: `CreateComment`,
    data: { ...body },
  });
};

const eventListenerService = (req) => {
  console.log(`Listening to event type ${req.body.type}`);
  return;
};

module.exports = {
  getAllCommentsByPostIdService,
  addCommentService,
  eventListenerService,
};
