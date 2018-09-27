import React from 'react'
import Proptypes from 'prop-types'

const propTypes = {
  fill: Proptypes.string
}

const defaultProps = {
  fill: '#ffffff'

}

class Logout extends React.Component {
  render () {
    const props = this.props
    return (
      <svg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <title>icon</title>
        <path fill={props.fill} d='M23.17,25.43a1,1,0,0,0-1,1v1H13.74V4.61h8.43V6.87a1,1,0,1,0,2,0V3.61a1,1,0,0,0-1-1H13.74V1a1,1,0,0,0-1.22-1L.78,2.63a1,1,0,0,0-.78,1V28.39a1,1,0,0,0,.78,1L12.52,32l.22,0a1,1,0,0,0,1-1V29.39h9.43a1,1,0,0,0,1-1v-2A1,1,0,0,0,23.17,25.43ZM11.74,29.75,2,27.59V4.41l9.74-2.16ZM32,16.66h0a1,1,0,0,1-.33.73l-5.18,5.18a1,1,0,0,1-1.41-1.41l3.5-3.5H17.3a1,1,0,0,1,0-2H28.6l-3.52-3.52a1,1,0,0,1,1.41-1.41l5.22,5.22a1,1,0,0,1,.29.71Z' />
      </svg>
    )
  }
}

Logout.defaultProps = defaultProps
Logout.propTypes = propTypes

export default Logout
