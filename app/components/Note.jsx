import React from 'react';
import { connect } from 'react-redux';

class Note extends React.Component {
  render() {
    return <li {...this.props}>{this.props.children}</li>;
  }
}
Note = connect()(Note);

export default Note;
