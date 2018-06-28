import React, { Component } from 'react';

class TodoList extends Component {
  // constructor(props){
  //   super(props)
  // }

  deleteItem(id){
    if(this.props.onRemove) this.props.onRemove(id)
  }

  render() {
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
    );
  }
}

export default TodoList;
