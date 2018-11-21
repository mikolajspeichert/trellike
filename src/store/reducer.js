import { combineReducers } from 'redux'
import { ListsReducer } from '../containers/Lists'
import { TasksReducer } from '../containers/Tasks'

export default combineReducers({
  lists: ListsReducer,
  tasks: TasksReducer,
})
