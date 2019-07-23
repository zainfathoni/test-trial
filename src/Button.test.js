import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Button from './Button'

describe('Test Button component', () => {
  it('renders children and triggers onClick correctly', () => {
    const onClick = jest.fn()
    const { getByText } = render(<Button onClick={onClick}>Toggle</Button>)

    expect(onClick).toHaveBeenCalledTimes(0)
    fireEvent.click(getByText('Toggle'))

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
