import { Component } from 'react'
import './Button.scss'

class Button extends Component {
  render() {
    return (
      <button {...this.props}>{this.props.children}</button>
    )
  }
}

export default Button
