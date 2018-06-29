import React, { Component } from 'react'

import { connect } from 'react-redux';

import {
  addTodo,
  removeTodo,
  todoSelector
} from './redux';

class TodoList extends Component {
  // constructor(props){
  //   super(props)
  // }

  deleteItem(id){
    if(this.props.removeTodo) this.props.removeTodo({id})
  }

  render() {
    if(this.props.todos.length > 0) {
      return (
        <div>
          <ul>
            {this.props.todos.map(todo => (
              <li key={todo.id}>
                <button onClick={this.deleteItem.bind(this, todo.id)} data-itemid={todo.id}>x</button>
                {todo.text}
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
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer
