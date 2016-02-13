import React from 'react';
import { connect } from 'react-redux';

import Lanes from './Lanes.jsx';
import * as laneActions from '../actions/lanes';

class App extends React.Component {
  render() {
    return(
      <div>
        <button className="add-lane" onClick={this.props.createLane}>+</button>
        <Lanes
          lanes={this.props.lanes}
          notes={this.props.notes} />
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

App = connect(mapStateToProps, laneActions)(App);

export default App;
