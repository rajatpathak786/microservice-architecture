import React, { useState, useEffect } from "react";
import axios from "axios";

function ListPosts() {
  const [posts, setPost] = useState([]);
  const fetchPosts = async () => {
    const res = await axios.get(`http://localhost:4000/posts`);
    setPost(res.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);
  const postList = posts.map((post) => {
    return (
      <div className="card" key={post.id}>
        <div className="card-body">
          <h5 className="card-title">{post.id}</h5>
          <h2 className="card-subtitle mb-2 text-body-secondary">
            {post.title}
          </h2>
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <>List Posts</>
      {postList}
    </div>
  );
}

export default ListPosts;
