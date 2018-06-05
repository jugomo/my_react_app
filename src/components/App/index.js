import React, { Component } from 'react';
import Intro from "../Intro";
import Series from "../../containers/Series";
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
        <Intro message="here we can find all of your most loved series" />
        <Series />
      </div>
    );
  }
}

export default App;
