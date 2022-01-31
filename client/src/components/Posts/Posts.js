import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
function Posts() {
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);
  return (
    <div className="grid lg:grid-cols-2 gap-5 justify-center">
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
