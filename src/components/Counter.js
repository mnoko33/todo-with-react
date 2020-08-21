import React, { Component } from 'react';
import '../stylesheets/Counter.css';

class Counter extends Component {
    render() {
        return (
            <div className="wrapper" style={{ backgroundColor: this.props.bg }}>
                <h2 className="title">{this.props.title}</h2>
                <div className="count">{this.props.count}</div>
            </div>
        )
    }
}

export default Counter;