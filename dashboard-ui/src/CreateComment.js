import React, { useState } from "react";
import axios from "axios";

function CreateComment({ postId }) {
  const [comment, setComment] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(`http://post.com/posts/${postId}/comment`, {
        content: comment,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setComment("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Comment</label>
          <input
            className="form-control"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default CreateComment;
