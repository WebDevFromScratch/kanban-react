import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Lanes from './Lanes.jsx';
import * as laneActions from '../actions/lanes';
import * as noteActions from '../actions/notes';

class App extends React.Component {
  render() {
    return(
      <div>
        <button className="add-lane" onClick={this.props.createLane}>+</button>
        <Lanes
          lanes={this.props.lanes}
          notes={this.props.notes}
          onValueClick={id => this.props.updateNote({id, editing: true})}
          onEdit={(id, task) => this.props.updateNote({id, task, editing: false})}
          onDelete={id => this.props.deleteNote({id})}/> {/*I can't quite grasp how this works exactly...*/} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    lanes: state.lanes
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({}, laneActions, noteActions), dispatch);
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
