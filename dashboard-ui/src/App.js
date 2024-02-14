import React from "react";
import PostCreate from "./PostCreate";
import ListPosts from "./ListPosts";
function App() {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <ListPosts />
    </div>
  );
}

export default App;
