import reducer from '../reducer'
import { actionUpdateTask, actionAddTask } from '../actions'

describe('Reducer - Tasks', () => {
  let initialState = {
    byId: {},
  }

  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('adds task on TASKS/ADD', () => {
    let id = 'id'
    let name = 'name'
    let description = 'desc'
    let action = actionAddTask(id, { name, description })
    expect(Object.values(reducer(initialState, action).byId)[0]).toMatchObject({
      name,
      description,
    })
  })

  it('updates task on TASKS/UPDATE', () => {
    let id = 'id'
    let state = {
      byId: {
        id: {
          id,
          name: 'diffName',
          description: 'diffDescription',
        },
      },
    }
    let name = 'name'
    let description = 'desc'
    let action = actionUpdateTask(id, { name, description })
    expect(reducer(state, action).byId[id]).toMatchObject({
      name,
      description,
    })
  })

  it('updates only changed values in task on TASKS/UPDATE', () => {
    let id = 'id'
    let state = {
      byId: {
        id: {
          id,
          name: 'diffName',
          description: 'diffDescription',
        },
      },
    }
    let name = 'name'
    let action = actionUpdateTask(id, { name })
    expect(reducer(state, action).byId[id]).toMatchObject({
      name,
      description: 'diffDescription',
    })
  })
})
