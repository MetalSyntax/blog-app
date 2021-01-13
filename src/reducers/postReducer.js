const postReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_POST':
            let stateCopy = [...state, action.payload];
            localStorage.setItem('posts',JSON.stringify(stateCopy));
            return stateCopy

        /*case FETCH_POST:
            stateCopy = [...state, action.payload.posts.id];
            return stateCopy;*/
    default:
        return state;
    }
}
export default postReducer;