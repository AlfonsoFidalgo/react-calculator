import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';


class App extends Component {
  state = {
    value: 0
  }

  render() {
    return (
      <div className="App">
        <h1>React Calculator</h1>
        <Calculator/>
      </div>
    );
  }
}

export default App;
