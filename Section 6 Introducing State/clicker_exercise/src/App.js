import React, { Component } from 'react'
import logo from './logo.svg';
import Clicker from './Clicker'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {num: 1}
  }
  render() {
    return (
      <div>
        <Clicker/>
      </div>
    );
  }
}

export default App;
