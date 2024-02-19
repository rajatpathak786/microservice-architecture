const posts = [];
const axios = require("axios");

const getAllPostsService = () => {
  return posts;
};

const framePostAndCommentService = async (req) => {
  const { type, data } = req.body;
  const { postId, content, commentId, title, status } = data;
  const post = {
    postId: postId,
    title: title,
    comments: [],
  };
  switch (type) {
    case `CreatePost`:
      posts.find((post) => post.postId == postId) ? null : posts.push(post);
      break;
    case `CreateComment`:
      posts.map((post) => {
        if (post.postId == postId) {
          post.comments.find((comment) => comment.commentId == commentId)
            ? null
            : post.comments.push({
                commentId,
                content,
                status,
              });
        }
      });
      break;
    case `CommentUpdated`:
      const postByPostId = posts.find((post) => post.postId == postId);
      const commentByCommentId = postByPostId.comments.find(
        (comment) => comment.commentId == commentId
      );
      commentByCommentId.status = status;

      break;
  }
  return post;
};

const queryPendingEventsService = async () => {
  const events = await axios
    .get(`http://localhost:4005/event`)
    .catch((err) => console.log(err.message));
  if (events && events.data) {
    const promises = events.data.map(
      async (event) => await framePostAndCommentService({ body: event })
    );
    return Promise.all(promises);
  }
};

module.exports = {
  getAllPostsService,
  framePostAndCommentService,
  queryPendingEventsService,
};
