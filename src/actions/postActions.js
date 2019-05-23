import axios from "axios";

export const getPosts = payload => dispatch => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      console.log("response", response);
      const {data} = response;
      dispatch({type:'GET_POSTS', payload:data})
    })
    .catch(err => {
      console.log("error", err);
    });
};
