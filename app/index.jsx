import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

// approach at writing a reducer here

// actions
// const CREATE_NOTE = 'CREATE_NOTE';
// function createNote() {
//   return {
//     type: 'CREATE_NOTE',
//     note: {
//       id: uuid.v4(),
//       task: 'New task'
//     }
//   }
// }
//
// const DELETE_NOTE = 'DELETE_NOTE';
// function deleteNote(note) {
//   return {
//     type: 'DELETE_NOTE',
//     id: note.id
//   }
// }

// reducer
const notes = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_NOTE':
      return [
        ...state,
        {
          id: action.id,
          task: action.task
        }
      ];
    case 'DELETE_NOTE':
      return [
        state.filter(note => note.id !== action.id)
      ];

    case 'UPDATE_NOTE':
      return state.map((note) => {
        if(note.id === action.id) {
          return Object.assign({}, note, action);
        }

        return note;
      });
    default:
      return state;
  }
}

let store = createStore(notes);

const render = () =>{
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();
