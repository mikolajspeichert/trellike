import { combineReducers } from 'redux'
import { createReducer } from 'redux-create-reducer'
import { actions } from './actions'
import { actions as taskActions } from '../Tasks/actions'

const listsInitialState = {}

const listInitialState = ({ ...params }) => ({
  tasks: [],
  index: 0,
  ...params,
})

const byId = createReducer(listsInitialState, {
  [actions.ADD_LIST](state, { payload }) {
    return {
      ...state,
      [payload.id]: listInitialState(payload),
    }
  },
  [actions.UPDATE_LIST](
    state,
    {
      payload: { id, name },
    }
  ) {
    return {
      ...state,
      [id]: {
        ...state[id],
        name,
      },
    }
  },
  [taskActions.ADD_TASK](
    state,
    {
      payload: { listId, id: taskId },
    }
  ) {
    return {
      ...state,
      [listId]: {
        ...state[listId],
        tasks: state[listId].tasks.concat(taskId),
      },
    }
  },
})

export default combineReducers({ byId })
