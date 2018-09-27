import React from 'react'
import Proptypes from 'prop-types'

const propTypes = {
  fill: Proptypes.string
}

const defaultProps = {
  fill: '#ffffff'

}

class AllApps extends React.Component {
  render () {
    const props = this.props
    return (
      <svg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <defs />
        <title>icon</title>
        <path fill={props.fill} d='M31.71,19.32l-4.2-4.2a9.31,9.31,0,1,0-1.4,1.4l4.2,4.2a1,1,0,0,0,1.4-1.4ZM20.29,16.6A7.31,7.31,0,1,1,27.6,9.29,7.32,7.32,0,0,1,20.29,16.6ZM3,18.83H13.17V29H3Zm6.7-5.65a11.23,11.23,0,0,0,1,2H2a1,1,0,0,1-1-1V2A1,1,0,0,1,2,1H12.65a11.36,11.36,0,0,0-1.73,2H3V13.17Zm2.21,3.65H2a1,1,0,0,0-1,1V30a1,1,0,0,0,1,1H14.17a1,1,0,0,0,1-1V19.34A11.34,11.34,0,0,1,11.91,16.83ZM29,22.21A3,3,0,0,0,31,23v7a1,1,0,0,1-1,1H17.83a1,1,0,0,1-1-1V20a11.2,11.2,0,0,0,2,.44V29H29Z' /></svg>
    )
  }
}

AllApps.defaultProps = defaultProps
AllApps.propTypes = propTypes

// export default AllApps
module.exports = AllApps
