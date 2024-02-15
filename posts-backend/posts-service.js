const axios = require("axios");
const posts = [];

const getAllPostsService = () => {
  return posts;
};

const addPostService = async (req) => {
  const post = {
    id: posts.length + 1,
    title: req.title,
  };
  posts.push(post);
  await axios.post(`http://localhost:4005/event`, {
    type: `CreatePost`,
    data: { ...post },
  });
  return post;
};

const eventListenerService = (req) => {
  console.log(`Listening to event type ${req.body.type}`);
  return;
};

module.exports = { getAllPostsService, addPostService, eventListenerService };
