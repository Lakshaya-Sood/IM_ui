import React from 'react'
import Proptypes from 'prop-types'

const propTypes = {
  fill: Proptypes.string
}

const defaultProps = {
  fill: '#ffffff'
}

class RegisterAppIcon extends React.Component {
  render () {
    const props = this.props

    return (
      <svg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <defs />
        <title>icon</title>
        <path fill={props.fill}
          d='M15.17,30V17.83a1,1,0,0,0-1-1H2a1,1,0,0,0-1,1V30a1,1,0,0,0,1,1H14.17A1,1,0,0,0,15.17,30Zm-2-1H3V18.83H13.17Zm2-14.83V2a1,1,0,0,0-1-1H2A1,1,0,0,0,1,2V14.17a1,1,0,0,0,1,1H14.17A1,1,0,0,0,15.17,14.17Zm-2-1H3V3H13.17Zm17.83,1V2a1,1,0,0,0-1-1H17.83a1,1,0,0,0-1,1V14.17a1,1,0,0,0,1,1H30A1,1,0,0,0,31,14.17Zm-2-1H18.83V3H29ZM31,24a.92.92,0,0,1-.92.92H24.92v5.17a.92.92,0,1,1-1.83,0V24.92H17.92a.92.92,0,1,1,0-1.83h5.17V17.92a.92.92,0,1,1,1.83,0v5.17h5.17A.92.92,0,0,1,31,24Z' /></svg>
    )
  }
}

RegisterAppIcon.defaultProps = defaultProps
RegisterAppIcon.propTypes = propTypes

export default RegisterAppIcon
