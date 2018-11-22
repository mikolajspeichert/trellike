import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Tasks, { validateTaskTitle } from '..'

const mockStore = configureStore([])
const store = mockStore({})

describe('Container - Tasks', () => {
  it('renders', () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <Tasks items={[]} listId="id" />
      </Provider>
    )
    expect(renderedComponent).toBeDefined()
  })

  describe('Validate function', () => {
    it('disallows empty name', () => {
      let emptyTaskTitle = ''
      expect(validateTaskTitle(emptyTaskTitle)).not.toBeNull()
    })
  })
})
