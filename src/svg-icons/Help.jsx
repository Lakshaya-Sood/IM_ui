import React from 'react'
import Proptypes from 'prop-types'

const propTypes = {
  fill: Proptypes.string
}

const defaultProps = {
  fill: '#ffffff'

}

class AppIcon extends React.Component {
  render () {
    const props = this.props
    return (
      <svg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <title>icon</title>
        <path fill={props.fill} d='M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm0,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30Zm5.09-18.41a5.1,5.1,0,0,1-4.09,5v2.19a1,1,0,0,1-2,0V15.68a1,1,0,0,1,1-1,3.09,3.09,0,1,0-3.09-3.09,1,1,0,1,1-2,0,5.09,5.09,0,0,1,10.18,0ZM16,21.68a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,16,21.68Z' />
      </svg>
    )
  }
}

AppIcon.defaultProps = defaultProps
AppIcon.propTypes = propTypes

export default AppIcon
