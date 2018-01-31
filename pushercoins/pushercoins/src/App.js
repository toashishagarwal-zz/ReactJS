import React, { Component } from 'react';
import './App.css';
import History from "./History/History";
import Today from "./Today/Today";

class App extends Component {
  render() {
    return (
      <div className="">
          <div className="topheader">
              <header className="container">
                  <nav className="navbar">
                      <div className="navbar-brand">
                          <span className="navbar-item">CryptoPrices</span>
                      </div>
                      
                  </nav>
              </header>
          </div>
          <section className="results--section">
              <div className="container">
                  <h1>Get realtime price information about<br></br> BTC, ETH and LTC</h1>
              </div>
              <div className="results--section__inner">
                  <Today />
                  <History />
              </div>
          </section>
      </div>
    );
  }
}

export default App;
