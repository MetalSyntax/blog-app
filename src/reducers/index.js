import { combineReducers } from 'redux';
/*import { routerReducer } from 'react-router-redux'*/

/*import postwc from './postwc'*/
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
  posts, comments, /*postwc*/ /*,routing: routerReducer*/
});

export default rootReducer;