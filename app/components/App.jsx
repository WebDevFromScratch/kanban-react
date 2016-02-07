import React from 'react';
import { connect } from 'react-redux';

import AddNote from './AddNote.jsx';
import Notes from './Notes.jsx';
import * as actions from '../actions/notes';

class App extends React.Component {
  render() {
    return(
      <div>
        <AddNote onButtonClick={this.props.createNote} />
        <Notes
          notes={this.props.notes}
          onValueClick={id => this.props.updateNote({id, editing: true})}
          onEdit={(id, task) => this.props.updateNote({id, task, editing: false})}
          onDelete={id => this.props.deleteNote({id})}/> {/*I can't quite grasp how this works exactly...*/}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state
  }
}

const mapDispatchToProps = actions;

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
