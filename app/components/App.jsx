import React from 'react';
import { connect } from 'react-redux'

let nextItemId = 0;
class App extends React.Component {
  render() {
    return(
      <div>
        <button onClick={() => {
          this.props.dispatch({
            type: 'CREATE_NOTE',
            id: nextItemId++,
            task: 'New item'
          })
        }}>
          +
        </button>
        <ul>
          {this.props.notes.map(note =>
            <li key={note.id}>
              {note.task}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state
  }
}

// const mapDispatchToProps = () => {
// }

App = connect(mapStateToProps)(App);

export default App;
