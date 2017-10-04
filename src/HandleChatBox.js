import React, { Component } from 'react';
import logo from './logo.svg';
import './HandleChatBox.css';
import InputA from './inputA';
import Output from './output';

class App extends Component {
  constructor() {
  super()

    this.state= {
      inputA: "",
      inputB: "",
      chatLog: ""
    }
  }

  saveInputA(text){
    this.setState({
      inputA: text
    })
  }

  saveInputB(text){
    this.setState({
      inputB: text
    })
  }
    
  handleSubmit(inputA){
    this.setState({
      chatLog: inputA
    })
  }

  render() {
    return (
      <div className="App">
        <InputA onChange={text => this.saveInputA(text)} onSubmit={inputA => this.handleSubmit(this.state.inputA)}/>
        <Output value={this.state.chatLog}/>
      </div>
    );
  }
}

export default App;
