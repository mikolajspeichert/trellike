import React from 'react'
import styled from 'styled-components'
import { texts } from '../../constants'

const Title = styled.h1`
  font-weight: 500;
  font-size: 3em;
  margin: 0.75em 0 0 1em;
`

const TitleBold = styled.span`
  font-weight: 700;
`

const Header = () => (
  <Title>
    <TitleBold>{texts.AppNameFirstPart}</TitleBold>
    {texts.AppNameSecondPart}
  </Title>
)

export default Header
