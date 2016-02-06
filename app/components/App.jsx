import React from 'react';
import { connect } from 'react-redux';

import AddNote from './AddNote.jsx';
import Notes from './Notes.jsx';

class App extends React.Component {
  render() {
    return(
      <div>
        <AddNote />
        <Notes
          notes={this.props.notes}
          onValueClick={id => this.props.updateNote({id, editing: true})}
          onEdit={(id, task) => this.props.updateNote({id, task, editing: false})} />
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
    updateNote: (note) => {
      dispatch({
        type: 'UPDATE_NOTE',
        ...note
      })
    }
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
