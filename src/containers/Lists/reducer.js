import { combineReducers } from 'redux'
import { createReducer } from 'redux-create-reducer'

const listsInitialState = {}

const listInitialState = {
  tasks: [],
  index: 0,
  name: null,
}

const byId = createReducer(listsInitialState, {})

export default combineReducers({ byId })
