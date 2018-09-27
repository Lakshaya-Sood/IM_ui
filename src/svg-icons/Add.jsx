import React from 'react'
import Proptypes from 'prop-types'

const propTypes = {
  fill: Proptypes.string
}

const defaultProps = {
  fill: '#ffffff'

}

class Add extends React.Component {
  render () {
    const props = this.props
    return (
      <svg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <title>icon</title>
        <path fill={props.fill} d='M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm0,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30Zm8-14a1,1,0,0,1-1,1H17v6a1,1,0,0,1-2,0V17H9a1,1,0,0,1,0-2h6V9a1,1,0,0,1,2,0v6h6A1,1,0,0,1,24,16Z' /></svg>
    )
  }
}

Add.defaultProps = defaultProps
Add.propTypes = propTypes

export default Add
