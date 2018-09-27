import React from 'react'
import Proptypes from 'prop-types'

const propTypes = {
  fill: Proptypes.string
}

const defaultProps = {
  fill: '#ffffff'
}

class ArrowLeft extends React.Component {
  render () {
    const props = this.props
    return (
      <svg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <title>icon</title>
        <path fill={props.fill} d='M20,24a1,1,0,0,1-1.71.7l-8-8.16a1,1,0,0,1,0-1.4L18,7.3a1,1,0,0,1,1.43,1.4l-7,7.14,7.31,7.46A1,1,0,0,1,20,24Z' /></svg>
    )
  }
}

ArrowLeft.defaultProps = defaultProps
ArrowLeft.propTypes = propTypes

export default ArrowLeft
