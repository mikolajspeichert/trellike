import { combineReducers } from 'redux'
import { createReducer } from 'redux-create-reducer'

const tasksInitialState = {}

const taskInitialState = {
  title: null,
  description: null,
  index: 0,
}

const byId = createReducer(tasksInitialState, {})

export default combineReducers({ byId })
