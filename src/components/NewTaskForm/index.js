import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import useInput from '../../hooks/useInput'
import useValidator from '../../hooks/useValidator'

const Container = styled.div``

const TitleInput = styled.input``
const DescriptionInput = styled.textarea``
const ErrorDisplay = styled.p``

const ConfirmButton = styled.button``
const DeclineButton = styled.button``

const useReset = (...args) => () => {
  args.forEach(arg => arg.call())
}

const NewTaskForm = ({ onConfirm, validate: validateFunc }) => {
  const [title, setTitle, resetTitle] = useInput('')
  const [description, setDescription, resetDescription] = useInput('')
  const [error, validate, resetError] = useValidator(validateFunc, () =>
    onConfirm(title, description)
  )
  // const reset = useReset(resetName, resetError)

  return (
    <Container>
      <TitleInput type="text" value={title} onChange={setTitle} />
      <DescriptionInput value={description} onChange={setDescription} />
      {error && <ErrorDisplay>{error}</ErrorDisplay>}
      <ConfirmButton onClick={() => validate(title)}>Ok</ConfirmButton>
      <DeclineButton>Nope</DeclineButton>
    </Container>
  )
}

NewTaskForm.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
}

export default NewTaskForm
