import React from 'react'
import Proptypes from 'prop-types'

const propTypes = {
  fill: Proptypes.string
}

const defaultProps = {
  fill: '#ffffff'

}

class Reload extends React.Component {
  render () {
    const props = this.props
    return (
      <svg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <title>icon</title>
        <path fill={props.fill} d='M29,16A13,13,0,0,1,10.52,27.79,1,1,0,1,1,11.37,26,11,11,0,1,0,5,16c0,.35,0,.7.05,1l1.11-1.68a1,1,0,1,1,1.67,1.11l-2.65,4a1,1,0,0,1-.74.44h-.1a1,1,0,0,1-.71-.29L.29,17.26a1,1,0,0,1,1.42-1.41l1.35,1.36C3,16.81,3,16.4,3,16a13,13,0,0,1,26,0Z' /></svg>
    )
  }
}

Reload.defaultProps = defaultProps
Reload.propTypes = propTypes

export default Reload
