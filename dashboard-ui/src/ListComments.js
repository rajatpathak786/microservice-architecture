import React, { useState, useEffect } from "react";
import axios from "axios";

function ListComments({ postId }) {
  const [comments, setComment] = useState([]);
  const fetchComments = async () => {
    const res = await axios
      .get(`http://localhost:4001/posts/${postId}/comment`)
      .catch((err) => {
        console.log(err);
      });
    if (res && res.status === 200) {
      setComment(res.data[postId]);
    }
  };
  useEffect(() => {
    fetchComments();
  }, []);
  const commentList =
    comments &&
    comments.map((comment) => {
      return <li key={comment.id}>{comment.content}</li>;
    });
  return <ul>{commentList}</ul>;
}

export default ListComments;
