const posts = [];

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
      posts.push(post);
      break;
    case `CreateComment`:
      posts.map((post) => {
        if (post.postId == postId) {
          post.comments.push({
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
  console.log(posts);
  return post;
};

module.exports = { getAllPostsService, framePostAndCommentService };
