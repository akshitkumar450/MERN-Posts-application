import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";
export default function Post({ post }) {
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
          <div className="cursor-pointer">
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
          <Button size="small">delete</Button>
        </CardActions>
      </Card>
    </div>
  );
}
