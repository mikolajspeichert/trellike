import uuid from 'uuid/v4'
import { createAction } from '../../store/actions'

const actions = {
  ADD_TASK: 'TASKS/ADD',
}

const actionAddTask = (title, description, listId) =>
  createAction(actions.ADD_TASK, { id: uuid(), title, description, listId })

export { actions, actionAddTask }
