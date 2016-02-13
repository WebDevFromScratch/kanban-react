import React from 'react';
import { connect } from 'react-redux';

class Lanes extends React.Component {
  render() {
    return(
      <div className="lanes">
        lanes should go here
      </div>
    )
  }
}
Lanes = connect()(Lanes);

export default Lanes;
