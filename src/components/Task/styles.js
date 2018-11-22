import styled from 'styled-components'
import { colors } from '../../styled'
import { Button } from '../../styled/common'

const Title = styled.h4`
  color: ${colors.lightBlack};
  margin: 0.5em 0;
`

const Description = styled.p`
  color: ${colors.lightBlack};
  margin: 0.25em 0;
`

const Container = styled.div`
  position: relative;
  background-color: ${colors.dirtyWhite};
  border-radius: 0.5em;
  margin: 0.5em 0;
  padding: 0.5em 1.25em;
`

const EditButton = styled(Button)`
  font-size: 0.75em;
  position: absolute;
  top: 0.25em;
  right: 0.25em;
  color: ${colors.lightBlack};
`

export { Title, Container, Description, EditButton }
