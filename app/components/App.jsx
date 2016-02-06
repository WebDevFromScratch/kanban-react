import React from 'react';
import { connect } from 'react-redux';
import uuid from 'node-uuid';

import AddNote from './AddNote.jsx';
import Notes from './Notes.jsx';

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

const mapDispatchToProps = (dispatch) => {
  return {
    createNote: () => {
      dispatch({
        type: 'CREATE_NOTE',
        id: uuid.v4(),
        task: 'New item'
      })
    },
    updateNote: (note) => {
      dispatch({
        type: 'UPDATE_NOTE',
        ...note
      })
    },
    deleteNote: (note) => {
      dispatch({
        type: 'DELETE_NOTE',
        id: note.id
      })
    }
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
