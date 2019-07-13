import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Toggle from './Toggle'
import Button from './Button'

configure({ adapter: new Adapter() })

describe('<Toggle />', () => {
  it('should render Button component', () => {
    const wrapper = shallow(<Toggle />)
    // console.log(wrapper.debug())

    expect(wrapper.state().toggle).toBe(false)
    expect(wrapper.find('span').prop('children')).toBe('Off')

    wrapper.find(Button).simulate('click')

    expect(wrapper.state().toggle).toBe(true)
    expect(wrapper.find('span').prop('children')).toBe('On')
  })
})
