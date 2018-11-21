import React from 'react'
import styled from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor } from '../../store'
import { GlobalStyles } from '../../styled'
import Lists from '../Lists'

const Container = styled.div``

const App = () => (
  <Container>
    <GlobalStyles />
    <PersistGate persistor={persistor}>
      <Lists />
    </PersistGate>
  </Container>
)

export default App
