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
      <svg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
        <title>icon</title>
        <path fill={props.fill} d='M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM7,3.5a1,1,0,1,1,2,0v5a1,1,0,0,1-2,0Zm1,10A1.5,1.5,0,1,1,9.5,12,1.5,1.5,0,0,1,8,13.5Z' /></svg>
    )
  }
}

CheckSmallFilled.defaultProps = defaultProps
CheckSmallFilled.propTypes = propTypes

export default CheckSmallFilled
