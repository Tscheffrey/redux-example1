import React, { Component } from 'react'

import { connect } from 'react-redux';

import {
  addTodo,
  removeTodo,
  toggleTodo,
  todoSelector,
} from './redux';

class TodoList extends Component {
  // constructor(props){
  //   super(props)
  // }

  deleteItem(todo){
    if(this.props.removeTodo) this.props.removeTodo({id:todo.id})
  }

  toggleDone(todo) {
      if(this.props.toggleTodo) this.props.toggleTodo(todo)
  }

  generateDoneButtonText(todo){
    if(todo.done) return 'done ✅'
    else return 'not done yet ❌'
  }

  render() {
    if(this.props.todos.length > 0) {
      return (
        <div>
          <ul>
            {this.props.todos.map(todo => (
              <li key={todo.id}>
                <button onClick={this.deleteItem.bind(this, todo)} data-itemid={todo.id}>🗑</button>
                {todo.text}
                <button onClick={this.toggleDone.bind(this, todo)} data-itemid={todo.id}>{this.generateDoneButtonText(todo)}</button>
              </li>
            ))}
          </ul>
        </div>
      )
    }
    else return 'Add some todos!'
  }
}

// TodoListContainerContainer.js
const mapStateToProps = (state, ownProps) => ({
  todos: todoSelector(state.todo),
});

const mapDispatchToProps = {
  addTodo,
  removeTodo,
  toggleTodo
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer
