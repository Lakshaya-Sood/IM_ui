import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  fill: PropTypes.string
}

const defaultProps = {
  fill: '#fff'
}

class Close extends Component {
  render () {
    const props = this.props
    return (
      <svg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <title>icon</title>
        <path fill={props.fill} d='M17.41,16l7.29-7.29a1,1,0,0,0-1.41-1.41L16,14.59,8.71,7.29A1,1,0,0,0,7.29,8.71L14.59,16,7.29,23.29a1,1,0,1,0,1.41,1.41L16,17.41l7.29,7.29a1,1,0,0,0,1.41-1.41Z' /></svg>
    )
  }
}

Close.propTypes = propTypes
Close.defaultProps = defaultProps

export default Close
