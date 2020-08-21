import React, { Component, } from 'react';
import '../stylesheets/Header.css';
import Counter from './Counter';

class Header extends Component {
    state = {};

    render() {
        console.log('header is mounted')
        return (
            <div className="header">
                <h1>TODO APP</h1>
                <div className="counter-wrapper">
                    <Counter title="Total" count={ this.props.todoCnt + this.props.doneCnt } bg="#FF3F69" />
                    <Counter title="Todo" count={ this.props.todoCnt } bg="#078AFF" />
                    <Counter title="Done" count={ this.props.doneCnt } bg="#FFAF2B" />
                </div>
            </div>  
        )
    }
}

export default Header;