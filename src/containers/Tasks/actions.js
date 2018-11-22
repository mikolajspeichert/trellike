import uuid from 'uuid/v4'
import { createAction } from '../../store/actions'

const actions = {
  ADD_TASK: 'TASKS/ADD',
  UPDATE_TASK: 'TASKS/UPDATE',
}

const actionAddTask = (listId, values) =>
  createAction(actions.ADD_TASK, { id: uuid(), listId, ...values })

const actionUpdateTask = (id, values) =>
  createAction(actions.UPDATE_TASK, { id, ...values })

export { actions, actionAddTask, actionUpdateTask }
