import React, { Component } from 'react';
import './App.css';
import Panel from './panel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Panel hue='green'/>
        <Panel hue='purple'/>
        <Panel hue='orange'/>
        <Panel hue='blue'/>
        <Panel hue='yellow'/>
      </div>
    );
  }
}

export default App;
