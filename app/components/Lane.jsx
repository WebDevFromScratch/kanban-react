import React from 'react';
import { connect } from 'react-redux';

class Lane extends React.Component {
  render() {
    const {lane, ...props} = this.props;

    return(
      <div className="lane">
        {this.props.lane.name}
      </div>
    )
  }
}
Lane = connect()(Lane);

export default Lane;
