import styled from 'styled-components'
import { Button, Input, ErrorDisplay } from '../../styled/common'

const NameContainer = styled.div`
  display: flex;
`

const EditButton = styled.span`
  font-size: 1.5rem;
  margin-bottom: 0.75em;
  margin-left: 0.5em;
  opacity: 0.75;
  cursor: pointer;
`

const ListContainer = styled.div`
  width: 17em;
  flex-shrink: 0;
  margin: 2em;
  padding: 2em;
  border-radius: 1em;
  background-color: rgba(245, 245, 237, 0.3);
`

const ListName = styled.h2`
  margin-top: 0;
  margin-bottom: 0.75em;
  font-size: 2.25em;
`

const EditableListName = styled(Input)`
  font-size: 2.25em;
  margin-bottom: 0.75em;
  width: 14rem;
`

const ConfirmEditButton = styled(Button)`
  font-size: 2em;
  margin-bottom: 0.75em;
`

export {
  EditableListName,
  ConfirmEditButton,
  ListName,
  ListContainer,
  EditButton,
  NameContainer,
  ErrorDisplay,
}
