import { combineReducers } from 'redux'
import { ListsReducer } from '../containers/Lists'

export default combineReducers({
  lists: ListsReducer,
})
