import axios from "axios";
import { API } from "./postActions";

export const login = (user) => {
  return {
    type: "LOGIN",
    payload: user,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const JWTsignIn = (email, password, history) => {
  return async (dispatch) => {
    try {
      const data = await API.post("/auth/signin", {
        email,
        password,
      });
      // console.log(data.data);
      dispatch({
        type: "JWT_SIGNIN",
        payload: data.data.user,
      });
      localStorage.setItem("token", data.data.token);
      history.push("/posts");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const JWTsignUp = (email, password, name, history) => {
  return async (dispatch) => {
    try {
      const data = await API.post("/auth/signup", {
        email,
        password,
        name,
      });
      // console.log(data.data);
      dispatch({
        type: "JWT_SIGNUP",
        payload: data.data.user,
      });
      localStorage.setItem("token", data.data.token);
      history.push("/posts");
    } catch (error) {
      // console.log(error.response);
      alert(error.response.data.message);
    }
  };
};
