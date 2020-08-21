import React, { Component, Fragment } from 'react';
import '../stylesheets/Input.css';

class Input extends Component {
    state = {
        value: '',
    };

    handleValueChange = e => {
        this.setState({ value: e.target.value });
    }

    handleEnterPress = e => {
        if (e.key === 'Enter' && this.state.value) {
            this.props.addTodoList({ title: this.state.value });
            this.setState({ value: '' });
        }
    }

    render() {
        return (
            <Fragment>
                <input 
                    id="todoInput"
                    placeholder="Write and Press Enter!"
                    value={ this.state.value }
                    onChange={ this.handleValueChange }
                    onKeyPress={ this.handleEnterPress }
                ></input>
            </Fragment>
        )
    }
}

export default Input;