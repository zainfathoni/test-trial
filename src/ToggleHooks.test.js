import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
// import Toggle from './Toggle'
import Toggle from './ToggleHooks'

describe('Test Toggle using React Testing Library', () => {
  afterEach(cleanup)

  it('render Toggle component', () => {
    const { getByText, queryByText } = render(<Toggle />)

    expect(getByText('Off')).toBeDefined()
    expect(queryByText('On')).toBeNull()

    fireEvent.click(getByText('Toggle'))

    expect(getByText('On')).toBeDefined()
    expect(queryByText('Off')).toBeNull()
  })
})
