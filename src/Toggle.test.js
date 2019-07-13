import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { render, cleanup, fireEvent } from '@testing-library/react'
import React from 'react'
import Toggle from './Toggle'

configure({ adapter: new Adapter() })

describe('Test Toggle using Enzyme', () => {
  it('shallow render Button component', () => {
    const wrapper = shallow(<Toggle />)

    expect(wrapper.state().toggle).toBe(false)
    expect(wrapper.find('span').prop('children')).toBe('Off')

    wrapper.instance().handleToggle()

    expect(wrapper.state().toggle).toBe(true)
    expect(wrapper.find('span').prop('children')).toBe('On')
  })
})

describe.skip('Test Toggle using React Testing Library', () => {
  afterEach(cleanup)

  it('render Button component', () => {
    const { getByText, queryByText } = render(<Toggle />)

    expect(getByText('Off')).toBeDefined()
    expect(queryByText('On')).toBeNull()

    fireEvent.click(getByText('Toggle'))

    expect(getByText('On')).toBeDefined()
    expect(queryByText('Off')).toBeNull()
  })
})
