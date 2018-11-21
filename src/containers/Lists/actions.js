import uuid from 'uuid/v4'
import { createAction } from '../../store/actions'

const actions = {
  ADD_LIST: 'LISTS/ADD',
}

const actionAddList = name =>
  createAction(actions.ADD_LIST, { id: uuid(), name })

export { actions, actionAddList }
