import React, { Component } from 'react';
import TodoCard from './TodoCard';
import Empty from './Empty';
import '../stylesheets/List.css';

class List extends Component {
    render() {
        return (
            <div className="list-wrapper">
                <h3 className="list-title">{ this.props.title }</h3>
                <div>
                    { this.props.list.length 
                        ? this.props.list.map((todo, idx) => {
                            return <TodoCard 
                                        key={ idx } 
                                        idx={ idx } 
                                        title={ todo.title } 
                                        setCardState={ this.props.setCardState } 
                                    />
                        }) 
                        : this.props.title === "TodoList" 
                            ? <Empty />
                            : false
                    }
                </div>
            </div>
        )
    }
}

export default List;