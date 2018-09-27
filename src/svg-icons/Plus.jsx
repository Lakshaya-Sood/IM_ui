import React from 'react'
import Proptypes from 'prop-types'

const propTypes = {
  fill: Proptypes.string
}

const defaultProps = {
  fill: '#ffffff'

}

class Plus extends React.Component {
  render () {
    const props = this.props
    return (
      <svg id='Ebene_1' data-name='Ebene 1' viewBox='0 0 32 32'>
        <title>icon</title>
        <path fill={props.fill} d='M28.89,16a1,1,0,0,1-1,1h-11V28a1,1,0,0,1-2,0V17h-11a1,1,0,1,1,0-2h11V4a1,1,0,0,1,2,0V15h11A1,1,0,0,1,28.89,16Z' /></svg>
    )
  }
}

Plus.defaultProps = defaultProps
Plus.propTypes = propTypes

export default Plus
