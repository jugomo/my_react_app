import React from 'react';

const Intro = (props) => (
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
    <br/>
    {props.message}
  </p>
)

export default Intro;
