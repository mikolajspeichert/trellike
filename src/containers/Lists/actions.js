import uuid from 'uuid/v4'
import { createAction } from '../../store/actions'

const actions = {
  ADD_LIST: 'LISTS/ADD',
  UPDATE_LIST: 'LISTS/UPDATE',
}

const actionAddList = name =>
  createAction(actions.ADD_LIST, { id: uuid(), name })

const actionUpdateListName = (id, name) =>
  createAction(actions.UPDATE_LIST, { id, name })

export { actions, actionAddList, actionUpdateListName }
