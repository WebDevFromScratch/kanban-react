import React from 'react';
import { connect } from 'react-redux';

import AddNote from './AddNote.jsx';
import Notes from './Notes.jsx';

class App extends React.Component {
  render() {
    return(
      <div>
        <AddNote />
        <Notes notes={this.props.notes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state
  }
}

App = connect(mapStateToProps)(App);

export default App;
