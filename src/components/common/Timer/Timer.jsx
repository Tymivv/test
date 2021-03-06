import { Component } from 'react';

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };
  intervalId = null;

  componentDidMount() {
    console.log('setInterval');

    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );
  }

  componentWillUnmount() {
    console.log('clearInterval');
    clearInterval(this.intervalId);
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}
