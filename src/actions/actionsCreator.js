/*export const increment = (id) => {
    return {
        type: 'INCREMENTE_COMMENTS',
        id
    };
}*/
export const AddComment = (id, username, content) => {
    return {
        type: 'ADD_COMMENT',
        id, username, content
    };
}
export const addPost = (post) => {
    return {
        type:'ADD_POST',
        payload: post
    };
}