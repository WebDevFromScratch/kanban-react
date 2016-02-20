import React from 'react';
import { connect } from 'react-redux';

import Lane from './Lane.jsx';

class Lanes extends React.Component {
  render() {
    const lanes = this.props.lanes;

    return(
      <div className="lanes">
        {lanes.map(lane =>
          <Lane lane={lane} key={lane.id} />
        )}
      </div>
    )
  }
}
Lanes = connect()(Lanes);

export default Lanes;
