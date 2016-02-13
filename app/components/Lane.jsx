import React from 'react';
import { connect } from 'react-redux';

import AddNote from './AddNote.jsx';
import Notes from './Notes.jsx';
import * as actions from '../actions/notes';

class Lane extends React.Component {
  render() {
    const {lane, ...props} = this.props;

    return(
      <div className="lane">
        {this.props.lane.name}
        <AddNote onButtonClick={this.props.createNote} />
        <Notes
          notes={this.props.notes}
          onValueClick={id => this.props.updateNote({id, editing: true})}
          onEdit={(id, task) => this.props.updateNote({id, task, editing: false})}
          onDelete={id => this.props.deleteNote({id})} />
      </div>
    )
  }
}

const mapDispatchToProps = actions;
Lane = connect(null, mapDispatchToProps)(Lane);

export default Lane;
