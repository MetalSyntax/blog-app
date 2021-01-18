/*import { Map } from 'immutable';*/

const dataInitial = {
    array: [],
}

function posts(state = dataInitial, action) {
    switch (action.type) {
        case "ADD_POST":
            const statePost = [...state, action.payload];
            localStorage.setItem("postwc", JSON.stringify(statePost));
            return statePost;

        default:
            return state;
    }
}

function postComments(state = dataInitial, action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            /*const stateComment = state.filter((post) => {
                if (post.id === action.id) {
                  return {
                    ...post,
                    textComments: [...post.textComments, {
                        username: action.username,
                        content: action.content
                    }]
                  };
                } else {
                  return post;
                }
              });
            localStorage.setItem("postwc", JSON.stringify(stateComment));
            return stateComment;*/
            /*const stateComment = [...state.textComments, action.payload];*/
            /*const stateComment =  [...state, {
                username: action.username,
                content: action.content
            }];*/
            /*localStorage.setItem("postwc", JSON.stringify(stateComment));
            return stateComment;*/

        default:
            return state;
    }
}

/*function comments(state = dataInitial, action) {
    if (typeof action.id !== 'undefined') {
        return {
            ...state, textComments: [...state.textComments, postComments]
            ...state, [action.id]: postComments(state[action.id], action)
        };
    }
    return state;
}*/

export default (postComments, posts)