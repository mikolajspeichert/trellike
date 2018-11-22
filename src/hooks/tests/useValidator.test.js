import React from 'react'
import { mount } from 'enzyme'
import useValidator from '../useValidator'

describe('Hooks - use validator', () => {
  let noop = () => {}
  it('returns empty initial error', () => {
    let HookComponent = () => {
      const [error] = useValidator(noop, noop)
      return <div>{error}</div>
    }
    const renderedComponent = mount(<HookComponent />)

    expect(renderedComponent.find('div').text()).toBe('')
  })

  it('returns proper error message', () => {
    let validateFunc = () => 'Error'

    let HookComponent = () => {
      const [error, validate] = useValidator(validateFunc, noop)
      return <div onClick={() => validate()}>{error}</div>
    }
    const renderedComponent = mount(<HookComponent />)
    renderedComponent.find('div').simulate('click')
    expect(renderedComponent.find('div').text()).toBe('Error')
  })

  it('fires onSuccess when validate passes', () => {
    let validateFunc = () => ''
    let onSuccess = jest.fn()

    let HookComponent = () => {
      const [error, validate] = useValidator(validateFunc, onSuccess)
      return <div onClick={() => validate()}>{error}</div>
    }
    const renderedComponent = mount(<HookComponent />)
    renderedComponent.find('div').simulate('click')
    expect(renderedComponent.find('div').text()).toBe('')
    expect(onSuccess.mock.calls.length).toBe(1)
  })

  it('returns empty if reset', () => {
    let validateFunc = () => 'Error'

    let HookComponent = () => {
      const [error, validate, reset] = useValidator(validateFunc, noop)
      return (
        <div>
          <button type="button" className="a" onClick={() => validate()}>
            a
          </button>
          <button type="button" className="b" onClick={() => reset()}>
            b
          </button>
          <div>{error}</div>
        </div>
      )
    }
    const renderedComponent = mount(<HookComponent />)
    renderedComponent.find('button.a').simulate('click')
    expect(
      renderedComponent
        .find('div')
        .last()
        .text()
    ).toBe('Error')
    renderedComponent.find('button.b').simulate('click')
    expect(
      renderedComponent
        .find('div')
        .last()
        .text()
    ).toBe('')
  })
})
