import React, { Component } from 'react';
import logo from './logo.svg';
import './HandleChatBox.css';
import InputA from './inputA';
import Output from './output';
import InputB from './inputB';

class App extends Component {
  constructor() {
  super()

    this.state= {
      inputA: "",
      inputB: "",
      chatLog: []
      
      
    }
  }

  saveInputA(text){
    this.setState({
      inputA: 'Giri: ' + text
    })
  }

  saveInputB(text){
    this.setState({
      inputB: 'Eric: ' + text
    })
  }
    
  handleSubmit(inputA){
    
    this.setState({
      chatLog: [...this.state.chatLog, inputA]
     
    })

  }
  handleSubmitB(inputB){
    
    this.setState({
      chatLog: [...this.state.chatLog, inputB]
     
    })

  }

  render() {
    return (
      <div className="App">
        <InputA onChange={text => this.saveInputA(text)} onSubmit={inputA => this.handleSubmit(this.state.inputA)}/>
        <InputB onChange={text => this.saveInputB(text)} onSubmit={inputB => this.handleSubmitB(this.state.inputB)}/>
        <Output value={this.state.chatLog}/>

      </div>
    );
  }
}

export default App;
