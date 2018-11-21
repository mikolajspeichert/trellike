import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Task from '../../components/Task'
import { texts } from '../../constants'
import NewTaskForm from '../../components/NewTaskForm'
import { actionAddTask } from './actions'
import { selectTasksFromList } from './selectors'

const withConnect = connect(
  selectTasksFromList,
  (dispatch, { listId }) => ({
    addNewTask: (title, desc) => dispatch(actionAddTask(title, desc, listId)),
  })
)

const validateTaskTitle = value => {
  if (!value) return texts.NewTaskErrorTitleEmpty
  return null
}

const Container = styled.div``

const Tasks = withConnect(({ tasks, addNewTask }) => (
  <Container>
    {tasks.map(task => (
      <Task {...task} key={task.id} />
    ))}
    <NewTaskForm onConfirm={addNewTask} validate={validateTaskTitle} />
  </Container>
))

Tasks.propTypes = {
  items: PropTypes.array.isRequired,
  listId: PropTypes.string.isRequired,
}

export { default as TasksReducer } from './reducer'
export default Tasks
