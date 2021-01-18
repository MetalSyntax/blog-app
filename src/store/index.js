import {createStore, compose ,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { createBrowserHistory } from "history";
import rootReducer from '../reducers/index';
import posts from '../data/posts';
import comments from '../data/comments';

const defaultState = {
    posts,
    comments, 
};

if( localStorage.getItem("posts") === null)
localStorage.setItem('posts', JSON.stringify(defaultState.posts));
else 
defaultState.posts = JSON.parse(localStorage.getItem('posts'));

if( localStorage.getItem("comments") === null)
localStorage.setItem('comments',JSON.stringify(defaultState.comments));
else 
defaultState.comments = JSON.parse(localStorage.getItem('comments'));

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(thunk)));

export const history = createBrowserHistory(store);

export default store;