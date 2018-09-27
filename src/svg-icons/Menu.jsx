import React, { Component } from 'react'
import Proptypes from 'prop-types'

const propTypes = {
  fill: Proptypes.string
}

const defaultProps = {
  fill: '#ffffff'
}

class Menu extends Component {
  render () {
    const props = this.props
    return (
      <svg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <defs />
        <title>icon</title>
        <path fill={props.fill} d='M28,10H4A1,1,0,0,1,4,8H28a1,1,0,0,1,0,2Zm1,6a1,1,0,0,0-1-1H4a1,1,0,0,0,0,2H28A1,1,0,0,0,29,16Zm0,7a1,1,0,0,0-1-1H4a1,1,0,0,0,0,2H28A1,1,0,0,0,29,23Z' /></svg>
    )
  }
}

Menu.propTypes = propTypes
Menu.defaultProps = defaultProps

export default Menu
