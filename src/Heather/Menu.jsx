import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '../svg-icons/Menu'
import CloseIcon from '../svg-icons/Close'

const propTypes = {
  onMenuClick: PropTypes.func,
  open: PropTypes.bool
}

const defaultProps = {
  onMenuClick: () => {},
  open: false
}

class Menu extends Component {
  render () {
    const props = this.props
    return (
      <IconButton
        onClick={props.onMenuClick}
        iconStyle={{
          transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
          height: '28px',
          width: '28px',
          margin: '0 auto'
        }}
        style={{height: '56px', width: '56px'}}>
        <div>{ props.open ? <CloseIcon /> : <MenuIcon /> }</div>
      </IconButton>
    )
  }
}

Menu.propTypes = propTypes
Menu.defaultProps = defaultProps

export default Menu
