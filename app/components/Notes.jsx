import React from 'react';
import { connect } from 'react-redux';

import Note from './Note.jsx';

class Notes extends React.Component {
  render() {
    const {notes, onValueClick, onEdit, onDelete} = this.props;

    return(
      <ul className="notes">
        {notes.map(note =>
          <li
            className="note"
            key={note.id}
            id={note.id}>
            <Note
              task={note.task}
              editing={note.editing}
              onValueClick={onValueClick.bind(null, note.id)}
              onEdit={onEdit.bind(null, note.id)}
              onDelete={onDelete.bind(null, note.id)} />
          </li>
        )}
      </ul>
    );
  }
}
Notes = connect()(Notes);

export default Notes;
