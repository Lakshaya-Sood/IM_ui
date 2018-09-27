import React from 'react'
import Proptypes from 'prop-types'

const propTypes = {
  fill: Proptypes.string
}

const defaultProps = {
  fill: '#ffffff'

}

class CheckSmallFilled extends React.Component {
  render () {
    const props = this.props
    return (
      <svg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <title>icon</title>
        <path fill={props.fill} d='M27.25,4.5A15.54,15.54,0,0,0,16,0,16.29,16.29,0,0,0,4.63,4.88,15.73,15.73,0,0,0,0,16.28,15.7,15.7,0,0,0,15.73,32H16A16.15,16.15,0,0,0,32,15.72h0A16.06,16.06,0,0,0,27.25,4.5ZM16,30A13.73,13.73,0,0,1,2,16.24a13.74,13.74,0,0,1,4-10A14.3,14.3,0,0,1,16,2h.25a13.52,13.52,0,0,1,9.58,3.92A14.09,14.09,0,0,1,16,30ZM15,18V8.5a1,1,0,0,1,2,0V18a1,1,0,0,1-2,0Zm2.68,4.77A1.68,1.68,0,1,1,16,21.13,1.68,1.68,0,0,1,17.68,22.81Z' />
      </svg>
    )
  }
}

CheckSmallFilled.defaultProps = defaultProps
CheckSmallFilled.propTypes = propTypes

export default CheckSmallFilled
