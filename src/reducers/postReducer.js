const initialState = {
  posts: "",
  isNewPostReceived:false
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS": {
      return {
        ...state,
        isNewPostReceived:true,
        posts: action.payload
      };
    }
    default:
      return state;
  }
};

export default postReducer;
