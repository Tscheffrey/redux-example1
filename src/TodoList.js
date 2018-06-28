import React, { Component } from 'react';

class TodoList extends Component {
  // constructor(props){
  //   super(props)
  // }

  deleteItem(id){
    if(this.props.onRemove) this.props.onRemove(id)
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

export default TodoList;
