import React from 'react'
import { mount } from 'enzyme'
import useInput from '../useInput'

describe('Hooks - use input', () => {
  it('returns initial value when no changes', () => {
    let HookComponent = ({ initialValue }) => {
      const [value] = useInput(initialValue)
      return <div>{value}</div>
    }
    const renderedComponent = mount(<HookComponent initialValue="test" />)

    expect(renderedComponent.find('div').text()).toBe('test')
  })

  it('returns proper value when changed', () => {
    let changedValue = { target: { value: 'changed' } }

    let HookComponent = ({ initialValue }) => {
      const [value, setValue] = useInput(initialValue)
      return <div onClick={() => setValue(changedValue)}>{value}</div>
    }
    const renderedComponent = mount(<HookComponent initialValue="test" />)
    renderedComponent.find('div').simulate('click')
    expect(renderedComponent.find('div').text()).toBe(changedValue.target.value)
  })

  it('returns initial if reset', () => {
    let changedValue = { target: { value: 'changed' } }

    let HookComponent = ({ initialValue }) => {
      const [value, setValue, reset] = useInput(initialValue)
      return (
        <div>
          <button type="button" className="a" onClick={() => reset()}>
            a
          </button>
          <button
            type="button"
            className="b"
            onClick={() => setValue(changedValue)}>
            b
          </button>
          <div>{value}</div>
        </div>
      )
    }
    const renderedComponent = mount(<HookComponent initialValue="test" />)
    renderedComponent.find('button.b').simulate('click')
    expect(
      renderedComponent
        .find('div')
        .last()
        .text()
    ).toBe(changedValue.target.value)
    renderedComponent.find('button.a').simulate('click')
    expect(
      renderedComponent
        .find('div')
        .last()
        .text()
    ).toBe('test')
  })
})
