import { css } from 'styled-components'

const breakpoints = {
  // xl: 1799, // large desktop
  lg: 1199, // small desktop
  md: 991, // tablet
  sm: 767, // phone
}

const mediaFactory = operator =>
  Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (${operator}-width: ${breakpoints[label]}px) {
        ${css(...args)};
      }
    `

    return acc
  }, {})

const media = {
  min: mediaFactory('min'),
  max: mediaFactory('max'),
}

export { media }
