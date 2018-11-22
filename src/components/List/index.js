import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import useValidator from '../../hooks/useValidator'
import { texts } from '../../constants'
import useInput from '../../hooks/useInput'

import {
  ListContainer,
  NameContainer,
  EditButton,
  ErrorDisplay,
  EditableListName,
  ListName,
  ConfirmEditButton,
} from './styles'

const List = ({ name, children, validateEdit, onUpdate }) => {
  const [editMode, setEditMode] = useState(false)
  const [nameValue, setName] = useInput(name)
  const [error, validate, resetError] = useValidator(validateEdit, onUpdate)

  return (
    <ListContainer>
      {error && <ErrorDisplay>{error}</ErrorDisplay>}
      <NameContainer>
        {editMode ? (
          <Fragment>
            <EditableListName value={nameValue} onChange={setName} />
            <ConfirmEditButton
              onClick={() => {
                if (validate(nameValue)) {
                  setEditMode(false)
                  resetError()
                }
              }}>
              {texts.ButtonOK}
            </ConfirmEditButton>
          </Fragment>
        ) : (
          <ListName>
            {name}
            <EditButton onClick={() => setEditMode(true)}>
              {texts.ButtonEdit}
            </EditButton>
          </ListName>
        )}
      </NameContainer>
      {children}
    </ListContainer>
  )
}

List.propTypes = {
  children: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  validateEdit: PropTypes.func.isRequired,
}

export default List
