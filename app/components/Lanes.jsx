import React from 'react';
import { connect } from 'react-redux';

import Lane from './Lane.jsx';

class Lanes extends React.Component {
  render() {
    const {lanes, notes} = this.props;

    return(
      <div className="lanes">
        {lanes.map(lane =>
          <li key={lane.id}>
            <Lane lane={lane} notes={notes} />
          </li>
        )}
      </div>
    )
  }
}
Lanes = connect()(Lanes);

export default Lanes;
