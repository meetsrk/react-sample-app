import React, { Component } from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 2000);
    console.log(this.timerID);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <div >
        <h2 > It is {this.state.date}. </h2>
      </div>
    );
  }
}

export default Clock
