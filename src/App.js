import React, { Component } from 'react';
import './App.css';
import CounterPanel from "./components/CounterPanel";
import Provider from './redux/Provider'
import store from './redux/Store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterPanel />
      </Provider>
    );
  }
}

export default App;
