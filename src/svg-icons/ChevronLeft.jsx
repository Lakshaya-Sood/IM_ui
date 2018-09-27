import React from 'react'
import Proptypes from 'prop-types'

const propTypes = {
  fill: Proptypes.string
}

const defaultProps = {
  fill: '#ffffff'
}

class ChevronLeft extends React.Component {
  render () {
    const props = this.props
    return (
      <svg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><defs /><title>icon</title>
        <path fill={props.fill} d='M19.89,16a1,1,0,0,1-.29.71l-6,6a1,1,0,0,1-1.41-1.41L17.48,16l-5.29-5.29A1,1,0,0,1,13.6,9.29l6,6A1,1,0,0,1,19.89,16Z' /></svg>
    )
  }
}

ChevronLeft.defaultProps = defaultProps
ChevronLeft.propTypes = propTypes

export default ChevronLeft
