import React, { useState } from 'react'
import PropTypes from 'prop-types'

import TaskForm from '../TaskForm'

import { Title, Description, Container, EditButton } from './styles'
import { texts } from '../../constants'

const Task = ({ title, description = '', onUpdate, validate }) => {
  const [editMode, setEditMode] = useState(false)

  return editMode ? (
    <TaskForm
      onConfirm={values => onUpdate(values) && setEditMode(false)}
      onResign={() => setEditMode(false)}
      validate={validate}
      initialValues={{ title, description }}
    />
  ) : (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <EditButton onClick={() => setEditMode(true)}>
        {texts.ButtonEdit}
      </EditButton>
    </Container>
  )
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string, // eslint-disable-line
  onUpdate: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
}

export default Task
