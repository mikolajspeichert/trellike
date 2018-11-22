import { createGlobalStyle } from 'styled-components'

import { media } from './utils'

const colors = {
  dirtyWhite: '#F5F5ED',
  lightBlack: '#1f1f1f',
  gray: '#aEaEaE',
  red: 'red',
}

const GlobalStyles = createGlobalStyle`
    body {
      color: ${colors.dirtyWhite};
      background-color: ${colors.lightBlack};
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      ${media.max.md`
        font-size: 12px;      
      `}
    }
  `

export { GlobalStyles, colors, media }
