import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateComment from "./CreateComment";
import ListComments from "./ListComments";

function ListPosts() {
  const [posts, setPost] = useState([]);
  const fetchPosts = async () => {
    const res = await axios.get(`http://localhost:4000/posts`).catch((err) => {
      console.log(err);
    });
    if (res && res.status === 200) {
      setPost(res.data);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  const postList = posts.map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h5 className="card-title">{post.id}</h5>
          <h2 className="card-subtitle mb-2 text-body-secondary">
            {post.title}
          </h2>
          <ListComments postId={post.id} />
          <CreateComment postId={post.id} />
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <>List Posts</>
      <div className="card-deck">
        <div className="row">{postList}</div>
      </div>
    </div>
  );
}

export default ListPosts;
