import React, { Component } from 'react';
import './App.css';
import CounterPanel from "./components/CounterPanel";
import store from './redux/Store'
import {Provider} from 'react-redux'

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
