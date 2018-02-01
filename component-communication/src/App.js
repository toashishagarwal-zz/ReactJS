import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Address from './Address/Address';

class App extends Component {
  state = {
    contacts:[ 
      { mobile : "32312312"},
      { mobile : "345544"},
      { mobile : "222112"},
      { mobile : "1111111"}
    ],
    winner: []
  }

  luckyWinnerHandler = () => {
    let x = Math.floor(Math.random() * (this.state.contacts.length - 1)) + 1;
    let winner = this.state.contacts[x].mobile;
    this.setState ({winner: [winner]});
  }

  render() {
    return (
      <div className="App">
        <Person name='Ashish' age='23' contact={this.state.contacts[0].mobile } />
        <Person name='Bhim' age='2' contact={this.state.contacts[1].mobile} />
        These 2 live at <Address address='405 Anandvan' />
        <Person name='Chinna' age='25' contact={this.state.contacts[2].mobile}>His hobbies are - Reading and painting</Person>
        <Person name='Munna' age='21' contact={this.state.contacts[3].mobile} />
        These 2 live at <Address address='Manjri Greens' />
        <button onClick={this.luckyWinnerHandler}>Find Today's Lucky winner is </button>
        <p>{this.state.winner}</p>
      </div>
    );
  }
}

export default App;
