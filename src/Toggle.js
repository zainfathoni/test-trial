import React from 'react'
import './Toggle.css'
import Button from './Button'

class Toggle extends React.Component {
  state = {
    toggle: false
  }

  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    return (
      <div>
        {this.state.toggle ? 'On' : 'Off'}
        <Button onClick={this.handleToggle}>Toggle</Button>
      </div>
    )
  }
}

export default Toggle
