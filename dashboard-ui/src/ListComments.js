import React from "react";

function DisplayContent(comment) {
  const { content, status } = comment;
  switch (status) {
    case `Approved`:
      return content;
    case `Rejected`:
      return `Comment has been rejected`;
    case `Pending`:
      return `Comment is subject to moderation`;
    default:
      return content;
  }
}

function ListComments({ comments }) {
  const commentList =
    comments &&
    comments.map((comment) => {
      console.log(comment);
      return <li key={comment.commentId}>{DisplayContent(comment)}</li>;
    });
  return <ul>{commentList}</ul>;
}

export default ListComments;
