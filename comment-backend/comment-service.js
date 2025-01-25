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
    commentId: comments.length + 1,
    content: req.body.content,
    status: `Pending`,
  };
  const commentsByPostId = comments.find((o) => {
    if (o.hasOwnProperty(req.params.id)) {
      o[req.params.id].push(comment);
      return o;
    }
  });
  if (commentsByPostId) {
    await emitEvent(`CreateComment`, { postId: req.params.id, ...comment });
    return comment;
  }
  comments.push({ [req.params.id]: [comment] });
  await emitEvent(`CreateComment`, { postId: req.params.id, ...comment });
  return comment;
};

const emitEvent = async (eventType, body) => {
  await axios
    .post(`http://event-bus-backend-srv:4005/event`, {
      type: eventType,
      data: { ...body },
    })
    .catch((err) => console.log(err.message));
};

const updateCommentStatus = async (body) => {
  const { postId, commentId, status } = body.data;
  const commentsByPostId = comments.find((comment) =>
    comment.hasOwnProperty(postId)
  );
  const commentByCommentId = commentsByPostId[postId].find(
    (comment) => comment.commentId === commentId
  );
  commentByCommentId.status = status;
  await emitEvent(`CommentUpdated`, body.data);
};

const eventListenerService = async (req) => {
  console.log(`Listening to event type ${req.body.type}`);
  if (req.body.type === `CommentModerated`) {
    await updateCommentStatus(req.body);
  }
  return;
};

module.exports = {
  getAllCommentsByPostIdService,
  addCommentService,
  eventListenerService,
};
