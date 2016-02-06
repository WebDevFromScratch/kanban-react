import React from 'react';
import { connect } from 'react-redux'

class Note extends React.Component {
  renderEdit = () => {
    return <input type="text"
      ref={
        (e) => e ? e.selectionStart = this.props.task.length : null
      }
      autoFocus={true}
      defaultValue={this.props.task}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  };

  renderDelete = () => {
    return <button
      className="delete-note"
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
        {editing ? this.renderEdit() : this.renderNote()}
      </div>
    )
  }

  renderNote = () => {
    return (
      <div onClick={this.props.onValueClick}>
        <span className="task">{this.props.task}</span>
        {this.renderDelete()}
      </div>
    );
  };
}
Note = connect()(Note);

export default Note;
