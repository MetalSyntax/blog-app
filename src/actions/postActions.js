export const addPost = post => {
    return {
        type:'ADD_POST',
        payload: post
    };
};

export const addComment = post => {
    return {
        type:'ADD_COMMENT',
        payload: post
    };
};
    