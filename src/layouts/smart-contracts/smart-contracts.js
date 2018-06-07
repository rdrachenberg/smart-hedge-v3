import React, { Component } from "react";

class Smart extends Component {
    constructor(props, { authData }) {
    super(props);
    authData = this.props;
    }
    render() {
        return (
        <main className="container">
            <div className="pure-g">
            <div className="pure-u-1-1">
                <h1>This is the Smart Contracts Page</h1>
                <h2>The smart way to handle risk.</h2>
            </div>
            </div>
        </main>
    );
}
}

export default Smart;
