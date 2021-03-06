import React from 'react'
import Proptypes from 'prop-types'

const propTypes = {
  fill: Proptypes.string
}

const defaultProps = {
  fill: '#ffffff'

}

class Settings extends React.Component {
  render () {
    const props = this.props
    return (
      <svg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <title>icon</title>
        <path fill={props.fill} d='M16,8a8,8,0,1,0,8,8A8,8,0,0,0,16,8Zm0,14a6,6,0,1,1,6-6A6,6,0,0,1,16,22Z' />
        <path fill={props.fill} d='M31,12H27.31a12,12,0,0,0-.48-1.17l2.61-2.61a1,1,0,0,0,0-1.41L25.19,2.56a1,1,0,0,0-1.41,0L21.17,5.17A11.93,11.93,0,0,0,20,4.69V1a1,1,0,0,0-1-1H13a1,1,0,0,0-1,1V4.69a11.92,11.92,0,0,0-1.17.48L8.22,2.56a1,1,0,0,0-1.41,0L2.57,6.81a1,1,0,0,0,0,1.41l2.61,2.61A11.92,11.92,0,0,0,4.69,12H1a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H4.69a11.92,11.92,0,0,0,.48,1.17L2.57,23.78a1,1,0,0,0,0,1.41l4.24,4.24a1,1,0,0,0,1.41,0l2.61-2.61a11.92,11.92,0,0,0,1.17.48V31a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V27.31a11.93,11.93,0,0,0,1.17-.48l2.61,2.61a1,1,0,0,0,1.41,0l4.24-4.24a1,1,0,0,0,0-1.41l-2.61-2.61A12,12,0,0,0,27.31,20H31a1,1,0,0,0,1-1V13A1,1,0,0,0,31,12Zm-1,6H26.57a1,1,0,0,0-1,.73,10,10,0,0,1-.88,2.15,1,1,0,0,0,.17,1.19l2.42,2.42-2.83,2.83L22.07,24.9a1,1,0,0,0-1.2-.17,9.93,9.93,0,0,1-2.14.88,1,1,0,0,0-.73,1V30H14V26.58a1,1,0,0,0-.73-1,10,10,0,0,1-2.14-.88,1,1,0,0,0-1.2.17L7.51,27.31,4.69,24.49l2.42-2.42a1,1,0,0,0,.17-1.2,9.94,9.94,0,0,1-.88-2.14,1,1,0,0,0-1-.73H2V14H5.42a1,1,0,0,0,1-.73,9.94,9.94,0,0,1,.88-2.14,1,1,0,0,0-.17-1.2L4.69,7.51,7.51,4.69,9.93,7.1a1,1,0,0,0,1.2.17,10,10,0,0,1,2.14-.88,1,1,0,0,0,.73-1V2h4V5.42a1,1,0,0,0,.73,1,9.93,9.93,0,0,1,2.14.88,1,1,0,0,0,1.2-.17l2.42-2.42,2.83,2.83L24.9,9.93a1,1,0,0,0-.17,1.19,10,10,0,0,1,.88,2.15,1,1,0,0,0,1,.73H30Z' />
      </svg>
    )
  }
}

Settings.defaultProps = defaultProps
Settings.propTypes = propTypes

export default Settings
