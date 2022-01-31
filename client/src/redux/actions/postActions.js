import axios from "axios";

export const getPosts = () => {
  return async (dispatch, getState) => {
    try {
      const data = await axios.get("http://localhost:5000/posts");
      // console.log(data.data);
      dispatch({
        type: "FETCH_ALL",
        payload: data.data.allPosts,
      });
    } catch (err) {
      alert(err.response.data.message);
    }
  };
};

export const createPost = (postData) => {
  return async (dispatch, getState) => {
    try {
      const data = await axios.post("http://localhost:5000/posts", postData);
      // console.log(data);
      dispatch({
        type: "CREATE",
        payload: data.data.newPost,
      });
    } catch (err) {
      alert(err.response.data.message);
    }
  };
};

// for setting the current post
export const setCurrentPostId = (id) => {
  return {
    type: "SET_CURR_POST_ID",
    payload: id,
  };
};

export const setCurrentPost = (id, postData) => {
  return async (dispatch, getState) => {
    try {
      const data = await axios.patch(
        `http://localhost:5000/posts/${id}`,
        postData
      );
      // console.log(data.data);
      dispatch({
        type: "UPDATE",
        payload: data.data.updatedPost,
      });
    } catch (err) {
      console.log(err.response);
      // alert(err.response.data.message);
    }
  };
};
