import React from 'react'
import styled from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor } from '../../store'
import { GlobalStyles } from '../../styled'
import Lists from '../Lists'
import Header from '../../components/Header'

const Container = styled.div``

const App = () => (
  <Container>
    <GlobalStyles />
    <Header />
    <PersistGate persistor={persistor}>
      <Lists />
    </PersistGate>
  </Container>
)

export default App
