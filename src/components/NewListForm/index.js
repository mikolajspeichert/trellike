import React, { useState } from 'react'
import PropTypes from 'prop-types'

import useInput from '../../hooks/useInput'
import useValidator from '../../hooks/useValidator'
import { texts } from '../../constants'

import {
  NewListButton,
  ButtonsContainer,
  NewListInput,
  NewListContainer,
  ErrorDisplay,
} from './styles'

const useReset = (...args) => () => {
  args.forEach(arg => arg.call())
}

const NewListForm = ({ onConfirm, validate: validateFunc }) => {
  const [focused, setFocused] = useState(false)
  const [name, setName, resetName] = useInput('')
  const [error, validate, resetError] = useValidator(validateFunc, onConfirm)
  const reset = useReset(resetName, resetError)

  return (
    <NewListContainer>
      {error && <ErrorDisplay>{error}</ErrorDisplay>}
      <NewListInput
        type="text"
        placeholder={texts.NewListPlaceholder}
        value={name}
        onChange={setName}
        onFocus={() => setFocused(true)}
        error={error}
      />
      {focused && (
        <ButtonsContainer>
          <NewListButton
            onClick={() => {
              if (validate(name)) {
                reset()
                setFocused(false)
              }
            }}>
            {texts.ButtonOK}
          </NewListButton>
          <NewListButton
            onClick={() => {
              setFocused(false)
              reset()
            }}>
            {texts.ButtonDecline}
          </NewListButton>
        </ButtonsContainer>
      )}
    </NewListContainer>
  )
}

NewListForm.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
}

export default NewListForm
