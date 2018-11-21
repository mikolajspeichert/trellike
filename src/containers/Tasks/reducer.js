import { combineReducers } from 'redux'
import { createReducer } from 'redux-create-reducer'
import { actions } from './actions'

const tasksInitialState = {}

const taskInitialState = {
  title: null,
  description: null,
  index: 0,
}

const byId = createReducer(tasksInitialState, {
  [actions.ADD_TASK](state, { payload }) {
    return {
      ...state,
      [payload.id]: payload,
    }
  },
})

export default combineReducers({ byId })
