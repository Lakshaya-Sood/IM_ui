import React from 'react'
import Proptypes from 'prop-types'

const propTypes = {
  fill: Proptypes.string
}

const defaultProps = {
  fill: '#ffffff'

}

class Back extends React.Component {
  render () {
    const props = this.props
    return (
      <svg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <title>icon</title>
        <path fill={props.fill} d='M28,16a1,1,0,0,1-1,1H7.41l7.29,7.29a1,1,0,1,1-1.41,1.41l-9-9a1,1,0,0,1,0-1.42l9-9a1,1,0,0,1,1.41,1.41L7.41,15H27A1,1,0,0,1,28,16Z' /></svg>
    )
  }
}

Back.defaultProps = defaultProps
Back.propTypes = propTypes

export default Back
