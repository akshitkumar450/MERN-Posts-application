import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  deletePost,
  getPosts,
  setCurrentPostId,
} from "../../../redux/actions/postActions";

export default function Post({ post }) {
  const dispatch = useDispatch();
  // updating the  current post id to redux store
  const updatePostId = (id) => {
    dispatch(setCurrentPostId(id));
  };

  const deleteCurrentPost = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <div className="col-span-1">
      <Card className="relative">
        <img
          alt="post"
          className="h-48 w-full object-cover"
          src={post.selectedFile}
        />

        <div className="absolute top-0 w-full flex justify-between items-center px-2 font-semibold bg-black text-white opacity-70">
          <div>
            <p>{post.creator}</p>
            <p>{moment(post.createdAt).fromNow()}</p>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => updatePostId(post._id)}>
            <span className="text-4xl">···</span>
          </div>
        </div>

        <CardContent>
          {post.tags.map((tag, idx) => (
            <p key={idx}>#{tag}</p>
          ))}
          <Typography gutterBottom variant="h4" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.message}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">like {post.likeCount}</Button>
          <Button size="small" onClick={() => deleteCurrentPost(post._id)}>
            delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
