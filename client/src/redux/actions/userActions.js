import axios from "axios";

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

export const JWTsignIn = (email, password) => {
  return async (dispatch) => {
    try {
      const data = await axios.post("http://localhost:5000/auth/signin", {
        email,
        password,
      });
      console.log(data.data);
      dispatch({
        type: "JWT_SIGNIN",
        payload: data.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const JWTsignUp = (email, password, name) => {
  return async (dispatch) => {
    try {
      const data = await axios.post("http://localhost:5000/auth/signup", {
        email,
        password,
        name,
      });
      console.log(data.data);
      dispatch({
        type: "JWT_SIGNUP",
        payload: data.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
