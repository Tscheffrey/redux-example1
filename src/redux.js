import Shortid from 'shortid'


import { applyMiddleware, combineReducers, createStore } from 'redux'

// actions.js
export const addTodo = todo => ({
  type: 'ADD_TODO',
  todo,
})

export const removeTodo = todo => ({
  type: 'REMOVE_TODO',
  todo,
})

// reducers.js

const initialState = {
    todo: {}
    // 'rJewgTUQGX' : {
    //   text: 'this is the first TODO'
    // },
    // 'JewgTUQG2' : {
    //   text : 'this is a second todo'
    // }

}

export const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let newTodo = {text: action.todo.text}
      let newState = Object.assign({}, state)
      newState.todo[Shortid.generate()] = newTodo
      return newState;

    case 'REMOVE_TODO':
      let newState2 = Object.assign({}, state)
      delete newState2.todo[action.todo.id]
      return newState2

    default:
      return state;
  }
};

export const reducers = combineReducers({
  todo,
})

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState)
  return store;
}

export const store = configureStore();


// Selectors

export const todoSelector = (state) => {
  let todos = []
  for (let todoId in state.todo) {
    todos.push(Object.assign({}, state.todo[todoId], {id: todoId}))
  }
  return todos
}
