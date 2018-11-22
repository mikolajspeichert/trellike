import reducer from '../reducer'
import { actionAddList, actionUpdateListName } from '../actions'
import { actionAddTask } from '../../Tasks/actions'

describe('Reducer - Lists', () => {
  let initialState = {
    byId: {},
  }

  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('adds list on LISTS/ADD', () => {
    let name = 'name'
    let action = actionAddList(name)
    expect(Object.values(reducer(initialState, action).byId)[0]).toMatchObject({
      name,
    })
  })

  it('updates list on LISTS/UPDATE', () => {
    let id = 'id'
    let state = {
      byId: {
        id: {
          id,
          name: 'diffName',
        },
      },
    }
    let name = 'name'
    let action = actionUpdateListName(id, name)
    expect(reducer(state, action).byId[id]).toMatchObject({
      name,
    })
  })

  it('adds a task to the list on TASK/ADD', () => {
    let listId = 'id'
    let title = 'title'
    let state = {
      byId: {
        id: {
          id: listId,
          name: 'name',
          tasks: [],
        },
      },
    }

    let action = actionAddTask(listId, { title })
    expect(reducer(state, action).byId[listId].tasks.length).toBe(1)
  })
})
