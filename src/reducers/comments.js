import { Map as map } from 'immutable';

const postComments = (state = map(), action) => {
  switch(action.type){
    case 'ADD_COMMENT':
      return [...state, { username: action.username, content: action.content }];
    default:
      return state;
  }
}

const comments = (state = map(), action) => {
  if(typeof action.id !== 'undefined') {
     const stateComment = {...state, [action.id]: postComments(state[action.id], action)};
     localStorage.setItem("comments", JSON.stringify(stateComment));
     return stateComment;
  }
  return state;
}

export default comments;