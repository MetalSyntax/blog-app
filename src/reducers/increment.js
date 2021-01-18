const increment = (state = [], action) => {
    switch(action.type){
        case 'INCREMENTE_COMMENTS':
            const commentCount = [...state, state.comments + 1];
            localStorage.setItem("posts", JSON.stringify(commentCount));
            return commentCount;
    
    default:
        return state;
    }
}
