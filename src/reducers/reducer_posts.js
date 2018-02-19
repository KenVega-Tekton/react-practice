import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions/index";
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // agrega el record del post al estado si no esta

      const post = action.payload.data;
      const newState = { ...state };
      newState[post.id] = post;
      return newState;

    //return { ...state, [action.payload.data.id]: action.payload.data };

    case FETCH_POSTS:
      let obj = {};
      action.payload.data.forEach(item => (obj[item.id] = item));
      return obj;

    case DELETE_POST:
      return _.omit(state, action.payload);
    //return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
}
