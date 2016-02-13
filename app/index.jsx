import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import notes from './reducers/notes';
import lanes from './reducers/lanes';

// appReducer
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
