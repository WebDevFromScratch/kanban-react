import React from 'react';
import { connect } from 'react-redux'
import uuid from 'node-uuid';

let AddNote = ({dispatch}) => {
  return(
    <button onClick={() => {
      dispatch({
        type: 'CREATE_NOTE',
        id: uuid.v4(),
        task: 'New item'
      })
    }}>
      +
    </button>
  );
}
AddNote = connect()(AddNote);

export default AddNote;
