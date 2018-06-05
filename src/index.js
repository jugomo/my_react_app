import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>, 
  document.getElementById('root')
);

// render a plain text
//const greeting = React.createElement('h1',{},'Hello world');
const getCurrentDate = function() {
  const date = new Date();
  return date.toDateString();
}
const getCurrentDate2 = () => {
  const date = new Date();
  return date.toDateString();
}
const greeting = <h1>Hello World!! date is: {getCurrentDate()}</h1>;
//ReactDOM.render(greeting, document.getElementById('root'));

registerServiceWorker();
