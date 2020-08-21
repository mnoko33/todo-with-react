import React, { Component } from 'react';
import './stylesheets/App.css';
import Input from './components/Input';
import List from './components/List';
import Header from './components/Header';

class App extends Component {
  state = {
    todoList: [],
    doneList: [],
  };

  addTodoList = (item) => {
    this.setState({ todoList: [ ...this.state.todoList, item ] })
  }

  setDone = (idx) => {
    const todoList = this.state.todoList;
    const doneList = this.state.doneList;
    this.setState({ 
      doneList: [ ...doneList, todoList[idx] ],
      todoList: todoList.filter((item, itemIdx) => itemIdx !== idx)
    })
  }

  setTodo = (idx) => {
    const todoList = this.state.todoList;
    const doneList = this.state.doneList;
    this.setState({
      todoList: [ ...todoList, doneList[idx] ],
      doneList: doneList.filter((item, itemIdx) => itemIdx !== idx)
    })
  }

  render() {
    console.log('App will be mounted')
    return (
      <div id="App">
        <Header 
          todoCnt = { this.state.todoList.length }
          doneCnt = { this.state.doneList.length }
        />
        <Input addTodoList={ this.addTodoList }/>
        <div style={{ overflowY: 'scroll', height: 'calc(80% - 90px)' }}>
          <List 
            title="TodoList" 
            list={ this.state.todoList } 
            setCardState={ this.setDone } 
          />
          <List 
            title="DoneList" 
            list={ this.state.doneList }
            setCardState = { this.setTodo }
          />
        </div>
      </div>
    );
  }
}

export default App;
