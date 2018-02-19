import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const FETCH_POST = "fetch_specific_post";
export const CREATE_POST = "CREATE_POST";

const rootURL = `http://reduxblog.herokuapp.com/api`;
const apiKey = `?key=58327`;

export function fetchPosts() {
  const request = axios.get(`${rootURL}/posts${apiKey}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios
    .post(`${rootURL}/posts${apiKey}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  console.log("id en function fetchPost: ", id);

  const request = axios.get(`${rootURL}/posts/${id}${apiKey}`);
  console.log("url, :", `${rootURL}/posts/${id}${apiKey}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}