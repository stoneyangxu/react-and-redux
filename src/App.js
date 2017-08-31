import React, { Component } from 'react';
import './App.css';
import CounterPanel from "./components/CounterPanel";

class App extends Component {
  render() {
    return (
      <div className="container">
        <CounterPanel />
      </div>
    );
  }
}

export default App;
