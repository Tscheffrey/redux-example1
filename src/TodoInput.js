import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  addTodo,
  todoSelector
} from './redux';

class TodoInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      text : ''
    }
    this.onAddClick = this.onAddClick.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
  }

  onAddClick(e){
    if(this.state.text.length > 0){
      if(this.props.addTodo) this.props.addTodo({text:this.state.text})
      this.setState({text:''})
    }
  }

  onTextChange(e){
    this.setState({text:e.target.value})
  }


  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.text}
          onChange={this.onTextChange}>
        </input>
        <button onClick={this.onAddClick}>+</button>
      </div>
    );
  }
}

// TodoListContainerContainer.js
const mapStateToProps = (state, ownProps) => ({
  todos: todoSelector(state.todo),
});

const mapDispatchToProps = {
  addTodo: addTodo,
};

const TodoInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput);

export default TodoInputContainer
