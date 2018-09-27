import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  fill: PropTypes.string
}

const defaultProps = {
  fill: '#fff'
}

class Notification extends Component {
  render () {
    const props = this.props
    return (
      <svg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <title>icon</title>
        <path fill={props.fill} d='M31,26a2.94,2.94,0,0,1-2.91-3V15.84A12.26,12.26,0,0,0,20.73,4.62,4.88,4.88,0,0,0,16,1a5,5,0,0,0-4.73,3.62A12.26,12.26,0,0,0,3.91,15.84v7.25A2.94,2.94,0,0,1,1,26a1,1,0,1,0,0,2H11.19a4.9,4.9,0,0,0,9.62,0H31a1,1,0,0,0,0-2ZM16,30a2.91,2.91,0,0,1-2.73-2h5.46A2.91,2.91,0,0,1,16,30ZM4.94,26a5,5,0,0,0,1-3V15.84a10.24,10.24,0,0,1,6.57-9.56,1,1,0,0,0,.64-.79A2.94,2.94,0,0,1,16,3a2.9,2.9,0,0,1,2.87,2.5,1,1,0,0,0,.64.79,10.24,10.24,0,0,1,6.58,9.56v7.25a5,5,0,0,0,1,3Z' />
      </svg>
    )
  }
}

Notification.propTypes = propTypes
Notification.defaultProps = defaultProps

export default Notification
