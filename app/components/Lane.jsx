import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddNote from './AddNote.jsx';
import Notes from './Notes.jsx';
import * as noteActions from '../actions/notes';
import * as laneActions from '../actions/lanes';

class Lane extends React.Component {
  render() {
    const {lane, allNotes, ...props} = this.props;
    const laneId = lane.id;
    const laneNotes = lane.notes.map((id) => allNotes[
      allNotes.findIndex((note) => note.id === id)
    ]).filter((note) => note);

    return(
      <div className="lane">
        {this.props.lane.name}
        <button onClick={() => props.deleteLane(laneId)}>x</button>
        <AddNote onButtonClick={this.addNote.bind(this, laneId)} />
        <Notes
          notes={laneNotes}
          onValueClick={id => this.props.updateNote({id, editing: true})}
          onEdit={(id, task) => this.props.updateNote({id, task, editing: false})}
          onDelete={id => this.removeNote(laneId, id)} />
      </div>
    )
  }

  addNote(laneId, e) {
    e.stopPropagation();

    const note = this.props.createNote();
    this.props.attachToLane(laneId, note.id);
  }

  removeNote(laneId, noteId) {
    this.props.detachFromLane(laneId, noteId);
    this.props.deleteNote(noteId);
  }
}

const mapStateToProps = (state) => {
  return {
    allNotes: state.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({}, laneActions, noteActions), dispatch);
}

Lane = connect(mapStateToProps, mapDispatchToProps)(Lane);

export default Lane;
