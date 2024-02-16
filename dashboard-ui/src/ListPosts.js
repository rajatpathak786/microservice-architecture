import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateComment from "./CreateComment";
import ListComments from "./ListComments";

function ListPosts() {
  const [posts, setPost] = useState([]);
  const fetchPosts = async () => {
    const res = await axios
      .get(`http://localhost:4002/posts`)
      .catch((err) => console.log(err));
    if (res && res.status === 200) {
      setPost(res.data);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  const postList = posts.map((post) => {
    const { postId, title, comments } = post;
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={postId}
      >
        <div className="card-body">
          <h5 className="card-title">{postId}</h5>
          <h2 className="card-subtitle mb-2 text-body-secondary">{title}</h2>
          <ListComments comments={comments} />
          <CreateComment postId={postId} />
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
