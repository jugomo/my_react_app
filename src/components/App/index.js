import React, { Component } from 'react';
import Main from '../Main';
import logo from '../../logo.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React you!</h1>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
