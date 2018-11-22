import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Lists, { validateListName } from '..'

const mockStore = configureStore([])
const store = mockStore({})

describe('Container - Lists', () => {
  it('renders', () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <Lists />
      </Provider>
    )
    expect(renderedComponent).toBeDefined()
  })

  describe('Validate function', () => {
    it('disallows empty name', () => {
      let emptyListName = ''
      expect(validateListName(emptyListName)).not.toBeNull()
    })

    it('disallows name longer than 30 char', () => {
      let longListName = 'a'.repeat(31)
      expect(validateListName(longListName)).not.toBeNull()
    })
  })
})
