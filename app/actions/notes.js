import uuid from 'node-uuid';

export const CREATE_NOTE = 'CREATE_NOTE';
export function createNote() {
  return {
    type: CREATE_NOTE,
    id: uuid.v4(),
    task: 'New item'
  };
}

export const UPDATE_NOTE = 'UPDATE_NOTE';
export function updateNote(note) {
  return {
    type: UPDATE_NOTE,
    ...note
  };
}

export const DELETE_NOTE = 'DELETE_NOTE';
export function deleteNote(note) {
  return {
    type: 'DELETE_NOTE',
    id: note.id
  };
}
