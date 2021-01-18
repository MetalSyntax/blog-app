import { Map as map } from 'immutable';

const posts = (state = map(), action) => {
  switch (action.type) {
    case "ADD_POST":
      const statePost = [...state, action.payload];
      localStorage.setItem("posts", JSON.stringify(statePost));
      return statePost;

    default:
      return state;
  }
}

export default posts;
