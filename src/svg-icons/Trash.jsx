import React from 'react'
import Proptypes from 'prop-types'

const propTypes = {
  fill: Proptypes.string
}

const defaultProps = {
  fill: '#ffffff'
}

class Trash extends React.Component {
  render () {
    const props = this.props
    return (
      <svg fill={props.fill} id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <title>icon</title>
        <path d='M30,3.91H21.44V1a1,1,0,0,0-1-1H10.26a1,1,0,0,0-1,1V3.91H2a1,1,0,0,0,0,2H4.19V31a1,1,0,0,0,1,1h20.4a1,1,0,0,0,1-1V5.91H30a1,1,0,0,0,0-2ZM11.24,2h8.24V3.91H11.24ZM24.58,30H6.14V5.91H24.58Z' /><path d='M10.13,9.48a1,1,0,0,0-1,1V25.13a1,1,0,1,0,2,0V10.48A1,1,0,0,0,10.13,9.48Z' /><path d='M15.35,9.48a1,1,0,0,0-1,1V25.13a1,1,0,0,0,2,0V10.48A1,1,0,0,0,15.35,9.48Z' /><path d='M19.57,10.48V25.13a1,1,0,0,0,2,0V10.48a1,1,0,0,0-2,0Z' />
      </svg>
    )
  }
}

Trash.defaultProps = defaultProps
Trash.propTypes = propTypes

export default Trash
