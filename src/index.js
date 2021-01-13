import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

import {createStore} from 'redux';
import postReducer from './reducers/postReducer';
import {Provider} from 'react-redux'

let initialState = [
  {
    id: 1,
    username: "John Doe",
    title: "Lorem Ipsum 1",
    excerpt: "Lorem ipsum dolor sit amet",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "10-01-2021",
    comments: 5,
  },
  {
    id: 2,
    username: "Jane Doe",
    title: "Lorem Ipsum 2",
    excerpt: "Lorem ipsum dolor sit amet",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "11-01-2021",
    comments: 6,
  },
  {
    id: 3,
    username: "Terry Adams",
    title: "Lorem Ipsum 3",
    excerpt: "Lorem ipsum dolor sit amet",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "12-01-2021",
    comments: 3,
  },
  {
    id: 4,
    username: "Jenny Smith",
    title: "Lorem Ipsum 4",
    excerpt: "Lorem ipsum dolor sit amet",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "13-01-2021",
    comments: 3,
  },
];

if( localStorage.getItem("posts") === null)
localStorage.setItem('posts',JSON.stringify(initialState));
else 
initialState = JSON.parse(localStorage.getItem('posts'));

const store = createStore(postReducer,initialState);

  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);