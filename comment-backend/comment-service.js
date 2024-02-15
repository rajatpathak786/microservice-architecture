const comments = [];

const getAllCommentsByPostId = (req) => {
  const commentsByPostId = comments.find((o) =>
    o.hasOwnProperty(req.params.id)
  );
  return commentsByPostId;
};

const addComment = (req) => {
  const comment = {
    content: req.body.content,
  };
  const commentsByPostId = comments.find((o) => {
    if (o.hasOwnProperty(req.params.id)) {
      o[req.params.id].push(comment);
      return o;
    }
  });
  if (commentsByPostId) {
    return comment;
  }
  comments.push({ [req.params.id]: [comment] });
  return comment;
};

module.exports = { getAllCommentsByPostId, addComment };
