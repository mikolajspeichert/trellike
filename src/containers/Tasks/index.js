import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Task from '../../components/Task'
import { texts } from '../../constants'
import TaskForm from '../../components/TaskForm'
import { actionAddTask, actionUpdateTask } from './actions'
import { selectTasksFromList } from './selectors'

const withConnect = connect(
  selectTasksFromList,
  (dispatch, { listId }) => ({
    addNewTask: values => dispatch(actionAddTask(listId, values)),
    updateTask: (id, values) => dispatch(actionUpdateTask(id, values)),
  })
)

const validateTaskTitle = value => {
  if (!value) return texts.NewTaskErrorTitleEmpty
  return null
}

const Container = styled.div``

const Tasks = withConnect(({ tasks, addNewTask, updateTask }) => (
  <Container>
    {tasks.map(task => (
      <Task
        {...task}
        key={task.id}
        validate={validateTaskTitle}
        onUpdate={values => updateTask(task.id, values)}
      />
    ))}
    <TaskForm onConfirm={addNewTask} validate={validateTaskTitle} />
  </Container>
))

Tasks.propTypes = {
  items: PropTypes.array.isRequired,
  listId: PropTypes.string.isRequired,
}

export { default as TasksReducer } from './reducer'
export { validateTaskTitle }
export default Tasks
