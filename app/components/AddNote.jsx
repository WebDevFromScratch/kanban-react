import React from 'react';
import { connect } from 'react-redux'

class AddNote extends React.Component {
  render() {
    return(
      <button onClick={this.props.onButtonClick}>
        +
      </button>
    );
  }
}
AddNote = connect()(AddNote);

export default AddNote;
