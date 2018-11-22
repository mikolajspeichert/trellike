import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

import useInput from '../../hooks/useInput'
import useValidator from '../../hooks/useValidator'
import { texts } from '../../constants'

import {
  NewTaskButton,
  NewTaskInput,
  NewTaskContainer,
  ButtonsContainer,
  ErrorDisplay,
} from './styles'

const noop = () => {}

const useReset = (...args) => () => {
  args.forEach(arg => arg.call())
}

const TaskForm = ({
  onConfirm,
  validate: validateFunc,
  initialValues,
  onResign = noop,
}) => {
  const isEdit = Boolean(initialValues)
  const [focused, setFocused] = useState(isEdit)
  const [title, setTitle, resetTitle] = useInput(
    isEdit ? initialValues.title : ''
  )
  const [description, setDescription, resetDescription] = useInput(
    isEdit ? initialValues.description : ''
  )
  const [error, validate, resetError] = useValidator(validateFunc, () =>
    onConfirm({ title, description })
  )
  const reset = useReset(resetTitle, resetError, resetDescription)

  return (
    <NewTaskContainer>
      {error && <ErrorDisplay>{error}</ErrorDisplay>}
      <NewTaskInput
        placeholder={
          isEdit
            ? texts.EditTaskTitlePlaceholder
            : texts.NewTaskTitlePlaceholder
        }
        type="text"
        value={title}
        onChange={setTitle}
        onFocus={() => setFocused(true)}
      />
      {focused && (
        <Fragment>
          <NewTaskInput
            placeholder={
              isEdit
                ? texts.EditTaskDescriptionPlaceholder
                : texts.NewTaskDescriptionPlaceholder
            }
            as="textarea"
            value={description}
            onChange={setDescription}
          />
          <ButtonsContainer>
            <NewTaskButton onClick={() => validate(title) && reset()}>
              {texts.ButtonOK}
            </NewTaskButton>
            <NewTaskButton
              onClick={() => {
                setFocused(false)
                reset()
                onResign()
              }}>
              {texts.ButtonDecline}
            </NewTaskButton>
          </ButtonsContainer>
        </Fragment>
      )}
    </NewTaskContainer>
  )
}

TaskForm.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  initialValues: PropTypes.object, // eslint-disable-line
  onResign: PropTypes.func, // eslint-disable-line
}

export default TaskForm
