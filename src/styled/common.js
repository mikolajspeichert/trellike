import styled from 'styled-components'
import { colors } from '.'

const Input = styled.input`
  outline: none;
  background-color: transparent;
  color: ${colors.dirtyWhite};
  border: none;
  border-bottom: ${({ error }) => (error ? colors.red : colors.dirtyWhite)} 1px
    solid;
  &:focus {
    border-bottom-width: 2px;
  }
`

const Button = styled.button`
  background-color: transparent;
  color: ${colors.dirtyWhite};
  outline: none;
  border: none;
  cursor: pointer;
`

const ErrorDisplay = styled.p`
  font-size: 0.75em;
  color: ${colors.red};
  margin: 0;
`

export { Input, Button, ErrorDisplay }
