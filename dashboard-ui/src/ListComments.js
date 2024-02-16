import React from "react";

function ListComments({ comments }) {
  const commentList =
    comments &&
    comments.map((comment) => {
      return <li key={comment.id}>{comment.content}</li>;
    });
  return <ul>{commentList}</ul>;
}

export default ListComments;
