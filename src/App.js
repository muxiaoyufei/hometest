import React, { Component } from 'react';
import "./App.css"

class App extends Component {
  state = {
    current : "1"
  }

  render() {
    return (
      <div className="main">
        {this.props.children}
      </div>
    );
  }
}

export default App;

