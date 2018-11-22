import styled from 'styled-components'
import { Input, Button, ErrorDisplay } from '../../styled/common'

const NewListContainer = styled.div`
  margin: 2em;
  display: flex;
  flex-direction: column;
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const NewListInput = styled(Input)`
  font-size: 2em;
`

const NewListButton = styled(Button)`
  font-size: 2em;
`

export {
  ButtonsContainer,
  NewListContainer,
  NewListInput,
  NewListButton,
  ErrorDisplay,
}
