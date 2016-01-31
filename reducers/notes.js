import uuid from 'node-uuid';

const initialState = [];

export default function notes(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_NOTE':
      return [
        ...notes,
        {
          id: uuid.v4(),
          task: 'New task'
        }
      ];
    case 'UPDATE_NOTE':
      return [
        state.map((note) => {
          if (note.id === action.id) {
            return Object.assign({}, note, action);
          }
        })
      ];
    case 'DELETE_NOTE':
      return state.filter(note => note.id !== action.id)
    default:
      return state;
  }
}
