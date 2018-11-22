import { combineReducers } from 'redux'
import { createReducer } from 'redux-create-reducer'
import { actions } from './actions'

const tasksInitialState = {}

const byId = createReducer(tasksInitialState, {
  [actions.ADD_TASK](state, { payload }) {
    return {
      ...state,
      [payload.id]: payload,
    }
  },
  [actions.UPDATE_TASK](state, { payload }) {
    return {
      ...state,
      [payload.id]: {
        ...state[payload.id],
        ...payload,
      },
    }
  },
})

export default combineReducers({ byId })
