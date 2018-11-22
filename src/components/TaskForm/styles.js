import styled from 'styled-components'
import { Button, Input, ErrorDisplay } from '../../styled/common'
import { colors } from '../../styled'

const NewTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const NewTaskInput = styled(Input)`
  font-size: 1.25em;
  margin-top: 1em;
  &::placeholder {
    opacity: 0.75;
    color: ${colors.dirtyWhite};
  }
`

const NewTaskButton = styled(Button)`
  font-size: 1.5em;
`

export {
  NewTaskButton,
  NewTaskInput,
  NewTaskContainer,
  ButtonsContainer,
  ErrorDisplay,
}
