import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const FETCH_POST = "fetch_specific_post";
export const CREATE_POST = "create_post";
export const DELETE_POST = "delete_post";

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
  const request = axios.get(`${rootURL}/posts/${id}${apiKey}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios
    .delete(`${rootURL}/posts/${id}${apiKey}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}
