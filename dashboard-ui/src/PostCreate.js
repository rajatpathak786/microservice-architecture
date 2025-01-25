import React, { useState } from "react";
import axios from "axios";

function PostCreate() {
  const [post, setPost] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(`http://post.com/posts/create`, { title: post })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setPost("");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label-lg">Post</label>
          <input
            className="form-control"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default PostCreate;
