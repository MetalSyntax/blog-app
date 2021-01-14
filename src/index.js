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
    title: "Autobiography of a DJ",
    excerpt: "My music is at once ambient & electronic, experimental, raw and powerful...",
    content: "My music is at once ambient & electronic, experimental, raw and powerful. I play an eclectic mix of music, from ambient-based tracks to electronic-based tracks, and have recently collaborated with a Brazilian creative DJ. The music I make is often influenced by my own experiences, and the lives around me. I am also a producer & musician, and have been involved in the industry for over five years.",
    date: "10-01-2021",
    comments: 1,
    textComments: [
      {
        id: 1,
        username: "Adaline Gayatri",
        content: "So Sick music",
      },
    ]
  },
  {
    id: 2,
    username: "Jane Doe",
    title: "History of Jason Michael",
    excerpt: "Jason Michael is a very talented young man from Melbourne, Australia...",
    content: "Jason Michael is a very talented young man from Melbourne, Australia. Currently training at UCD under Paul Conroy (Rooftop Music Academy) he has been touring internationally with many artists over 10 years. I’m 19 years old, live on the north coast of England & have also studied at the Royal College Of Music/Cambia University, London. I perform all genres, mainly pop but love to do some acoustic covers too!",
    date: "11-01-2021",
    comments: 2,
    textComments: [
      {
        id: 1,
        username: "Kelsie Douglas",
        content: "Oh, a storm is threat'ning My very life today If I don't get some shelter Oh yeah, I'm gonna fade away.",
      },
      {
        id: 2,
        username: "Averie Mirja",
        content: "I never meant to cause you any sorrow. I never meant to cause you any pain. I only wanted to one time see you laughing. I only wanted to see you laughing in the purple rain.",
      },
    ]
  },
  {
    id: 3,
    username: "Terry Adams",
    title: "James a incredible artist",
    excerpt: "James is a London based artist with over 4 years of professional DJ experience...",
    content: "James is a London based artist with over 4 years of professional DJ experience as well working within EDM scenes all around Europe, particularly UK. From live sets to background vocals, he’s got it covered. The Nifty Ones are a highly experienced band playing everything from 60's Rock & Roll to 70&80% Motown!",
    date: "12-01-2021",
    comments: 1,
    textComments: [
      {
        id: 1,
        username: "Sabeen Wiegand",
        content: "I want to listen his music",
      },
    ]
  },
  {
    id: 4,
    username: "Jenny Smith",
    title: "The amazing life of Alexander",
    excerpt: "In 2010, Alexander came to rave world with the track Krassen as an independent artist.",
    content: "In 2010, Alexander came to rave world with the track Krassen as an independent artist. His story began at the end of 2009 when heard a video about a German girl who was trying out some new ideas on stage where she got sick due one thing or another (i dont know what). So...he goes into trance all night long!",
    date: "13-01-2021",
    comments: 3,
    textComments: [
      {
        id: 1,
        username: "Hazel Nutt",
        content: "Nice post",
      },
      {
        id: 2,
        username: "Jack Pott",
        content: "Great",
      },
      {
        id: 3,
        username: "Aylin Grey",
        content: "Wow",
      },
    ]
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