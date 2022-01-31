import { Button, Card, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createPost,
  setCurrentPost,
  setCurrentPostId,
} from "../../redux/actions/postActions";

function Form() {
  const dispatch = useDispatch();
  const currentId = useSelector((state) => state.posts.currentPostId);
  // console.log(currentId);

  const posts = useSelector((state) => state.posts.posts);
  // console.log(posts);

  // finding the post with currentId to prefill the form values
  const currentPost = posts.find((post) => post._id === currentId);
  // console.log(currentPost);

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const clear = () => {
    dispatch(setCurrentPostId(null));
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if we don't have the currentId of the post ,means we want to create a new post else we want to update existing post
    if (!currentId) {
      dispatch(createPost(postData));
    } else {
      dispatch(setCurrentPost(currentId, postData));
    }
    clear();
  };

  useEffect(() => {
    if (currentPost) setPostData(currentPost);
  }, [currentPost]);

  return (
    <Card className="p-2">
      <form
        className="space-y-5"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}>
        <Typography variant="h6">
          {currentId ? "Editing memories" : "creating memories"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <TextField
          name="image"
          variant="outlined"
          label="image url"
          fullWidth
          value={postData.selectedFile}
          onChange={(e) =>
            setPostData({ ...postData, selectedFile: e.target.value })
          }
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth>
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth>
          Clear
        </Button>
      </form>
    </Card>
  );
}

export default Form;
