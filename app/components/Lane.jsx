import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddNote from './AddNote.jsx';
import Notes from './Notes.jsx';
import Editable from './Editable.jsx';
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
        <div className="lane-header"
          onClick={() => this.props.updateLane({id: laneId, editing: true})}>
          <Editable
            value={lane.name}
            editing={lane.editing}
            onEdit={name => props.updateLane({id: laneId, name, editing: false})} />
            {/*onValueClick={this.editLane.bind(null, lane)} />*/}
        </div>
        {/*<button onClick={() => props.deleteLane(laneId)}>x</button>*/}
        {/*<AddNote onButtonClick={this.addNote.bind(this, laneId)} />*/}
        <Notes
          notes={laneNotes}
          onValueClick={id => this.props.updateNote({id, editing: true})}
          onEdit={(id, task) => this.props.updateNote({id, task, editing: false})}
          onDelete={id => this.removeNote(laneId, id)} />
      </div>
    )
  }

  editLane(lane) {
    const laneId = lane.id;

    laneActions.updateLane({laneId, editing: true})

    console.log(`edit lane ${laneId}`);
  }

  activateNoteEdit(id) {
    console.log(`activate note ${id} edit`);
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

  editName = (name) => {
    const laneId = this.props.lane.id;

    console.log(`edit lane ${laneId} name using ${name}`);
  };
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
