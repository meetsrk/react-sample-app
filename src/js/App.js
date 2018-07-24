import React, { Component } from 'react';
import { render } from 'react-dom';
import Clock from './Clock.js';
import ActionLink from './ActionLink.js';
import Toggle from './Toggle.js';

class App extends React.Component {
//function App() {
    render() {
    return (
      <div>
        <h1> Hello, React! < /h1>
        <Clock />
        <ActionLink />
        <Toggle />
      </div>
    );
  }
}

export default App
