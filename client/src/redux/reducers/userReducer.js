const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    case "JWT_SIGNIN":
      return {
        user: action.payload,
      };
    case "JWT_SIGNUP":
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};
