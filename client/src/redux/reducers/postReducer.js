const initialState = {
  posts: [],
  currentPostId: null,
};

export const postReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "FETCH_ALL":
      return {
        ...state,
        posts: action.payload,
      };
    case "CREATE":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "SET_CURR_POST_ID":
      return {
        ...state,
        currentPostId: action.payload,
      };

    case "UPDATE":
      return {
        ...state,
        posts: state.posts.map((post) =>
          // action.payload is the post we want to update
          // if the post id === post id of which we want to update then we will return that updated post ,else return the old post
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case "DELETE":
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
};
