import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { texts } from '../../constants'
import NewListForm from '../../components/NewListForm'
import List from '../../components/List'
import Tasks from '../Tasks'

import { actionAddList, actionUpdateListName } from './actions'

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  overflow-x: scroll;
  height: calc(100vh - 6.5em);
`

const withConnect = connect(
  state => ({ lists: state.lists.byId }),
  dispatch => ({
    addNewList: listName => dispatch(actionAddList(listName)),
    updateListName: (id, listName) =>
      dispatch(actionUpdateListName(id, listName)),
  })
)

const validateListName = value => {
  if (!value) return texts.NewListErrorEmpty
  if (value.length > 30) return texts.NewListErrorTooLong
  return null
}

const Lists = withConnect(({ lists, addNewList, updateListName }) => (
  <Container>
    {Object.keys(lists).map(id => {
      const { name, tasks } = lists[id]
      return (
        <List
          name={name}
          key={id}
          onUpdate={newName => updateListName(id, newName)}
          validateEdit={validateListName}>
          <Tasks items={tasks} listId={id} />
        </List>
      )
    })}
    <NewListForm onConfirm={addNewList} validate={validateListName} />
  </Container>
))

export { default as ListsReducer } from './reducer'
export { validateListName }
export default Lists
