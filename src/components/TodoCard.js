import React, { Component } from 'react';
import '../stylesheets/TodoCard.css';

class Todocard extends Component {
    render() {
        return (
        <div 
            className="todoCard-wrapper"
            onClick={ () => this.props.setCardState(this.props.idx) } 
        >
            { this.props.title }
        </div>
        )
    }
}

export default Todocard;