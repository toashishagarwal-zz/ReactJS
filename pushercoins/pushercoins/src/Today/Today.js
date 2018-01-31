import React, { Component } from 'react';
import './Today.css';
import axios from 'axios';
import Pusher from 'pusher-js';

class Today extends Component {

    constructor () {
        super();
        this.state = {
            btcprice:'',
            ltcprice:'',
            ethprice:''
        };
        let rawUrl = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=';
        let currency = 'INR';
        this.url = rawUrl+currency;
    }

    // This is called when an instance of a component is being created and inserted into the DOM.
    componentWillMount () {
        // establish a connection to Pusher
        this.pusher = new Pusher('fa782a4d36b2353f6ce0', {
            cluster: 'ap2',
            encrypted: true
        });

        // Subscribe to the 'coin-prices' channel
        this.prices = this.pusher.subscribe('coin-prices');
        
        axios.get(this.url)
            .then(response => {
                // We set the latest prices in the state to the prices gotten from Cryptocurrency.
                this.setState({ btcprice: response.data.BTC.INR });
                this.setState({ ethprice: response.data.ETH.INR });
                this.setState({ ltcprice: response.data.LTC.INR });
            })
            // Catch any error here
            .catch(error => {
                console.log(error)
            })
    }

    sendPricePusher (data) {
        axios.post('/prices/new', {
            prices: data
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount () {
        setInterval(() => {
            axios.get(this.url)
                .then(response => {
                    this.sendPricePusher (response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }, 10000);

        // We bind to the 'prices' event and use the data in it (price information) to update the state values, thus, realtime changes 
        this.prices.bind('prices', price => {
            this.setState({ btcprice: price.prices.BTC.INR });
            this.setState({ ethprice: price.prices.ETH.INR });
            this.setState({ ltcprice: price.prices.LTC.INR });
        }, this);
    }

    render() {
        return (
            <div className="today--section container">
                    <h2>Current Price</h2>
                    <div className="columns today--section__box">
                        <div className="column btc--section">
                            <h5>INR {this.state.btcprice}</h5>
                            <p>1 BTC</p>
                        </div>
                        <div className="column eth--section">
                            <h5>INR {this.state.ethprice}</h5>
                            <p>1 ETH</p>
                        </div>
                        <div className="column ltc--section">
                            <h5>INR {this.state.ltcprice}</h5>
                            <p>1 LTC</p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Today;