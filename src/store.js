import { createStore } from 'redux'

const initialState = {
  counter: 0
}

function counterReducer (state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, { counter: state.counter + 1 })
    case 'RESET':
      return Object.assign({}, state, { counter: 0 })
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}

export const store = createStore(counterReducer)
