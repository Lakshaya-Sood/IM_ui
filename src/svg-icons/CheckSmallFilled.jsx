import React from 'react'
import Proptypes from 'prop-types'

const propTypes = {
  fill: Proptypes.string
}

const defaultProps = {
  fill: '#ffffff'

}

class CheckSmallFilled extends React.Component {
  render () {
    const props = this.props
    return (
      <svg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'>
        <title>icon</title>
        <path fill={props.fill} d='M40,0A40,40,0,1,0,80,40,40,40,0,0,0,40,0ZM59.52,28.15,36,54.4a1.78,1.78,0,0,1-2.67,0L20.48,40.1a1.92,1.92,0,0,1,.1-2.65,1.78,1.78,0,0,1,2.57.1L34.64,50.36,56.85,25.6a1.78,1.78,0,0,1,2.57-.1A1.92,1.92,0,0,1,59.52,28.15Z' /></svg>
    )
  }
}

CheckSmallFilled.defaultProps = defaultProps
CheckSmallFilled.propTypes = propTypes

export default CheckSmallFilled
