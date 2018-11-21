import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import useInput from '../../hooks/useInput'
import useValidator from '../../hooks/useValidator'

const NewListContainer = styled.div``

const NewListInput = styled.input``
const ErrorDisplay = styled.p``

const ConfirmButton = styled.button``
const DeclineButton = styled.button``

const useReset = (...args) => () => {
  args.forEach(arg => arg.call())
}

const NewListForm = ({ onConfirm, validate: validateFunc }) => {
  const [name, setName, resetName] = useInput('')
  const [error, validate, resetError] = useValidator(validateFunc, onConfirm)
  const reset = useReset(resetName, resetError)

  return (
    <NewListContainer>
      <NewListInput type="text" value={name} onChange={setName} />
      {error && <ErrorDisplay>{error}</ErrorDisplay>}
      <ConfirmButton onClick={() => validate(name) && reset()}>
        Ok
      </ConfirmButton>
      <DeclineButton onClick={reset}>Nope</DeclineButton>
    </NewListContainer>
  )
}

NewListForm.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
}

export default NewListForm
