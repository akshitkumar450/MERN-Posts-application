const initialState = {
  posts: [],
};

export const postReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "FETCH_ALL":
      return {
        posts: action.payload,
      };
    case "CREATE":
      return {
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};
