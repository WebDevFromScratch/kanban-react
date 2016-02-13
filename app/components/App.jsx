import React from 'react';
import { connect } from 'react-redux';

// import AddNote from './AddNote.jsx';
// import Notes from './Notes.jsx';
// import * as actions from '../actions/notes';

import Lanes from './Lanes.jsx';
import * as laneActions from '../actions/lanes';

class App extends React.Component {
  render() {
    return(
      <div>
        <button className="add-lane" onClick={this.props.createLane}>+</button>
        <Lanes
          lanes={this.props.lanes} />
      </div>
    )

    // return(
    //   <div>
    //     <AddNote onButtonClick={this.props.createNote} />
    //     <Notes
    //       notes={this.props.notes}
    //       onValueClick={id => this.props.updateNote({id, editing: true})}
    //       onEdit={(id, task) => this.props.updateNote({id, task, editing: false})}
    //       onDelete={id => this.props.deleteNote({id})}/> {/*I can't quite grasp how this works exactly...*/}
    //   </div>
    // );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    lanes: state.lanes
  }
}

const mapDispatchToProps = laneActions;
// const mapDispatchToProps = actions;

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
