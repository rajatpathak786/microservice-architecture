const comments = [];

const getAllCommentsByPostId = (req) => {
  const commentsByPostId = comments.find((o) => o.hasOwnProperty(req.param.id));
  return commentsByPostId;
};

const addComment = (req) => {
  const comment = {
    content: req.body.content,
  };
  const commentsByPostId = comments.find((o) => o.hasOwnProperty(req.param.id));
  if (commentsByPostId.length) {
    commentsByPostId.push(comment);
    return comment;
  }
  comments.push({ [req.id]: [...comment] });
  return comment;
};

module.exports = { getAllCommentsByPostId, addComment };
