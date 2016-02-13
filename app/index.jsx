import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import * as types from './actions/notes';

// reducer
import * as laneTypes from './actions/lanes';

const lanes = (state = [], action) => {
  switch(action.type) {
    case laneTypes.CREATE_LANE:
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ];
    default:
      return state;
  }
}

const note = (state, action) => {
  switch (action.type) {
    case types.CREATE_NOTE:
      return {
        id: action.id,
        task: action.task
      };
    case types.UPDATE_NOTE:
      if(state.id === action.id) {
        return Object.assign({}, state, action);
      }

      return state;
    default:
      return state;
  }
}

const notes = (state = [], action) => {
  switch(action.type) {
    case types.CREATE_NOTE:
      return [
        ...state,
        note(undefined, action)
      ];
    case types.DELETE_NOTE:
      return state.filter(note => note.id !== action.id)

    case types.UPDATE_NOTE:
      return state.map(n => note(n, action));
    default:
      return state;
  }
}

let kanbanApp = combineReducers({
  lanes,
  notes
})

let store = createStore(kanbanApp);

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
