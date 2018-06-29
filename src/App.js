import React, { Component } from 'react';

import { Provider } from 'react-redux'
import { store } from './redux'

import './App.css';

import Shortid from 'shortid'

import TodoInputContainer from './TodoInput'
import TodoListContainer from './TodoList'

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }

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
