import * as types from '../actions/notes';

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
export default notes;
