import React, { Component } from 'react';

import { Provider } from 'react-redux'
import { store } from './redux'

import './App.css';

import Shortid from 'shortid'

import TodoInputContainer from './TodoInput'
import TodoListContainer from './TodoList'

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
        <TodoInputContainer store={store}/>
        <Provider store={store}>
        <TodoListContainer/>
        </Provider>
    </div>
    );
  }
}

export default App;
