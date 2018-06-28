import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Shortid from 'shortid'

import TodoInput from './TodoInput'
import TodoList from './TodoList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }

    this.onAddTodo = this.onAddTodo.bind(this)
    this.onRemoveTodo = this.onRemoveTodo.bind(this)
  }

  onAddTodo(item){
    item.id = Shortid.generate()
    let todo = {
      id: Shortid.generate(),
      text: item.text
    }
    let todos = this.state.todos
    todos.push(todo)
    this.setState({todos})
  }

  onRemoveTodo(id){
    let todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({todos})
  }


  render() {
    return (
      <div className="App">
        <TodoInput onAdd={this.onAddTodo}/>
        <TodoList todos={this.state.todos} onRemove={this.onRemoveTodo}/>
      </div>
    );
  }
}

export default App;
