import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import * as types from './actions/notes';

// reducer
const notes = (state = [], action) => {
  switch(action.type) {
    case types.CREATE_NOTE:
      return [
        ...state,
        {
          id: action.id,
          task: action.task
        }
      ];
    case types.DELETE_NOTE:
      return state.filter(note => note.id !== action.id)

    case types.UPDATE_NOTE:
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
