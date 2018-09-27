import React from 'react'
import Proptypes from 'prop-types'

const propTypes = {
  fill: Proptypes.string
}

const defaultProps = {
  fill: '#ffffff'

}

class MyAppsIcon extends React.Component {
  render () {
    const props = this.props
    return (
      <svg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <defs />
        <title>icon</title>
        <path fill={props.fill} d='M27.34,8.05a4.8,4.8,0,0,0,1.29-3.27,4.7,4.7,0,1,0-9.4,0,4.8,4.8,0,0,0,1.29,3.27,6.3,6.3,0,0,0-4,6.07,1,1,0,0,0,1,1H30.33a1,1,0,0,0,1-1A6.3,6.3,0,0,0,27.34,8.05Zm-3.41-6a2.65,2.65,0,0,1,2.61,2.69,2.61,2.61,0,1,1-5.21,0A2.65,2.65,0,0,1,23.94,2.09Zm-5.24,11c.31-1.44,1.41-3.51,5.24-3.51s4.93,2.07,5.24,3.51ZM14.17,1H2A1,1,0,0,0,1,2V14.17a1,1,0,0,0,1,1H14.17a1,1,0,0,0,1-1V2A1,1,0,0,0,14.17,1Zm-1,12.17H3V3H13.17Zm1,3.65H2a1,1,0,0,0-1,1V30a1,1,0,0,0,1,1H14.17a1,1,0,0,0,1-1V17.83A1,1,0,0,0,14.17,16.83ZM13.17,29H3V18.83H13.17ZM30,16.83H17.83a1,1,0,0,0-1,1V30a1,1,0,0,0,1,1H30a1,1,0,0,0,1-1V17.83A1,1,0,0,0,30,16.83ZM29,29H18.83V18.83H29Z' /></svg>
    )
  }
}
MyAppsIcon.defaultProps = defaultProps
MyAppsIcon.propTypes = propTypes
export default MyAppsIcon
