import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    userInput : ''
  }

  inputChangeHandler= (event) => {
    this.setState({userInput:event.target.value});
  }

  deleteCharHandler = (index) => {
    console.log('delete clicketd');
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const newText = text.join('');
    this.setState({userInput:newText});
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
              character={ch} 
              key={index} 
              clicked={()=>this.deleteCharHandler(index)} />;
    }); 

    return (
      <div className="App">
        <br />
        <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput} />
        <p>
          {this.state.userInput}
        </p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
