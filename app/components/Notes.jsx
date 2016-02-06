import React from 'react';
import { connect } from 'react-redux'

// import Note from './Note.jsx';

class Notes extends React.Component {
  render() {
    const notes = this.props.notes;

    return(
      <ul className="notes">
        {notes.map(note =>
          <li className="note" key={note.id}>
            {note.task}
            {/*<Note task={note.task} />*/}
          </li>
        )}
      </ul>
    );
  }
}
Notes = connect()(Notes);

export default Notes;
