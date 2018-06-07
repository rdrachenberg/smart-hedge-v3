import React, { Component } from 'react'
// import uport from "uport-connect";

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <div className="row">
              <div className="col">
                <p>
                  <strong>User: {this.props.authData.name}</strong>
                </p>
              </div>
              <div className="col">
                <strong>
                  You hail from: {this.props.authData.country}
                </strong>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <strong>Your Telephone# is: {this.props.authData.phone}</strong>
              </div>
              <div className="col-6">
                <strong>Your email is: {this.props.authData.email}</strong>
              </div>
            </div>

            <br />
            <div className="row">
              <div className="col-6">
                <strong>Public Key: {this.props.authData.publicKey}</strong>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-6">
                <strong>
                  Public Encyption Key: {this.props.authData.publicEncKey}
                </strong>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-4">
                <strong>
                  Wallet Address: {this.props.authData.address}
                </strong>
              </div>
            </div>
          </div>
        </div>
      <link rel="stylesheet" type="text/css" href="./layouts/streamer/current/style.css" />
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-md-offset-1 price-boxes">
              <div className="panel-group">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <h6>
                      <a href="https://www.cryptocompare.com">
                        Source: CryptoCompare.com
                      </a>
                    </h6>
                    <h2 className="price-display">
                      BTC - USD <span className="price" id="PRICE_BTC" />
                    </h2>
                    <h5>
                      24h Change: <span id="CHANGE24HOUR_BTC" />
                      <span className="pct-change" id="CHANGE24HOURPCT_BTC" />
                      <br />
                    </h5>
                    <h5>
                      Last Market: <span className="exchange" id="LASTMARKET_BTC" /> <br />
                    </h5>
                    <h5>
                      Trade ID: <span id="LASTTRADEID_BTC" />
                      <br />
                    </h5>
                    <h5>
                      Open Hour: <span id="OPENHOUR_BTC" />
                      <br />
                    </h5>
                    <h5>
                      High Hour: <span id="HIGHHOUR_BTC" />
                      <br />
                    </h5>
                    <h5>
                      Low Hour: <span id="LOWHOUR_BTC" />
                      <br />
                    </h5>
                    <h5>
                      Open Day: <span id="OPEN24HOUR_BTC" />
                      <br />
                    </h5>
                    <h5>
                      High Day: <span id="HIGH24HOUR_BTC" />
                      <br />
                    </h5>
                    <h5>
                      Low Day: <span id="LOW24HOUR_BTC" />
                      <br />
                    </h5>
                    <h5>
                      Last Trade Volume: <span id="LASTVOLUME_BTC" />
                      <br />
                    </h5>
                    <h5>
                      Last Trade Volume To: <span id="LASTVOLUMETO_BTC" />
                      <br />
                    </h5>
                    <h5>
                      24h Volume: <span id="VOLUME24HOUR_BTC" />
                      <br />
                    </h5>
                    <h5>
                      24h VolumeTo: <span id="VOLUME24HOURTO_BTC" />
                      <br />
                    </h5>
                    <h5>
                      Total Volume (BTC): <span id="FULLVOLUMEFROM_BTC" />
                      <br />
                    </h5>
                    <h5>
                      Total Volume (USD): <span id="FULLVOLUMETO_BTC" />
                      <br />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 price-boxes">
              <div className="panel-group">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <h6>
                      <a href="https://www.cryptocompare.com">
                        Source: CryptoCompare.com
                      </a>
                    </h6>
                    <h2 className="price-display">
                      ETH - USD <span className="price" id="PRICE_ETH" />
                    </h2>
                    <h5>
                      24h Change: <span id="CHANGE24HOUR_ETH" />
                      <span className="pct-change" id="CHANGE24HOURPCT_ETH" />
                      <br />
                    </h5>
                    <h5>
                      Last Market: <span className="exchange" id="LASTMARKET_ETH" /> <br />
                    </h5>
                    <h5>
                      Trade ID: <span id="LASTTRADEID_ETH" />
                      <br />
                    </h5>
                    <h5>
                      Open Hour: <span id="OPENHOUR_ETH" />
                      <br />
                    </h5>
                    <h5>
                      High Hour: <span id="HIGHHOUR_ETH" />
                      <br />
                    </h5>
                    <h5>
                      Low Hour: <span id="LOWHOUR_ETH" />
                      <br />
                    </h5>
                    <h5>
                      Open Day: <span id="OPEN24HOUR_ETH" />
                      <br />
                    </h5>
                    <h5>
                      High Day: <span id="HIGH24HOUR_ETH" />
                      <br />
                    </h5>
                    <h5>
                      Low Day: <span id="LOW24HOUR_ETH" />
                      <br />
                    </h5>
                    <h5>
                      Last Trade Volume: <span id="LASTVOLUME_ETH" />
                      <br />
                    </h5>
                    <h5>
                      Last Trade Volume To: <span id="LASTVOLUMETO_ETH" />
                      <br />
                    </h5>
                    <h5>
                      24h Volume: <span id="VOLUME24HOUR_ETH" />
                      <br />
                    </h5>
                    <h5>
                      24h VolumeTo: <span id="VOLUME24HOURTO_ETH" />
                      <br />
                    </h5>
                    <h5>
                      Total Volume (ETH): <span id="FULLVOLUMEFROM_ETH" />
                      <br />
                    </h5>
                    <h5>
                      Total Volume (USD): <span id="FULLVOLUMETO_ETH" />
                      <br />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.2/socket.io.js" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
        
        
    </main>;

  }
}

export default Dashboard
