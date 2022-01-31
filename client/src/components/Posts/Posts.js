import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

function Posts() {
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);

  return (
    <div>
      {posts.length === 0 ? (
        <div className="grid place-items-center">
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-5 justify-center">
          {posts.map((post) => (
            <React.Fragment key={post._id}>
              <Post post={post} />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;
