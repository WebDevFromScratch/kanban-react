import React from 'react';
import { connect } from 'react-redux'

class Editable extends React.Component {
  renderEdit = () => {
    return <input type="text"
      ref={
        (e) => e ? e.selectionStart = this.props.value.length : null
      }
      autoFocus={true}
      defaultValue={this.props.value}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  };

  renderDelete = () => {
    return <button
      className="delete"
      onClick={this.props.onDelete}>x</button>
  };

  checkEnter = (e) => {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  finishEdit = (e) => {
    const value = e.target.value;

    if (this.props.onEdit) {
      this.props.onEdit(value.trim());
    }
  };

  render() {
    const {editing, onEdit, onValueClick, ...props} = this.props;

    return(
      <div {...props}>
        {editing ? this.renderEdit() : this.renderValue()}
      </div>
    )
  }

  renderValue = () => {
    return (
      <div onClick={this.props.onValueClick}>
        <span className="value">{this.props.value}</span>
        {this.renderDelete()}
      </div>
    );
  };
}
Editable = connect()(Editable);

export default Editable;
