const posts = [];

const getAllPostsService = () => {
  return posts;
};

const framePostAndCommentService = async (req) => {
  const { postId, content, id, title } = req.body.data;
  const post = {
    postId: id,
    title: title,
    comments: [],
  };
  if (req.body.type === `CreatePost`) {
    posts.push(post);
  }
  if (req.body.type === `CreateComment`) {
    posts.map((post) => {
      console.log(post, postId);
      if (post.postId == postId) {
        post.comments.push({
          id,
          content,
        });
      }
    });
  }
  console.log(posts);

  return post;
};

module.exports = { getAllPostsService, framePostAndCommentService };
