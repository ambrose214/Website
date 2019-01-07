import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


export default class Example extends Component {
  state = {
    dimensions: null,
  };

  componentDidMount() {

    this.interval = setInterval( () =>
    this.setState({
      dimensions: {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight,
      },
    }), 1000);
  }


componentWillUnmount() {
    // Clear the interval right before component unmount
    clearInterval(this.interval);
}

  renderContent() {
    const { dimensions } = this.state;

    return (
      <div className="hi">
      width: {dimensions.width}
      <br />
      height: {dimensions.height}
      </div>
      );
  }

  render() {
    const { dimensions } = this.state;

    return (
      <div className="Hello" ref={el => (this.container = el)}>
      {dimensions && this.renderContent()}
      </div>
      );
  }
}



class Character extends Component {
  constructor (props) {
    super(props);
    this.state = {
      x: 0,

    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      >
      Learn React
      </a>
      </header>
      </div>
      );
  }
}

//export default App;
