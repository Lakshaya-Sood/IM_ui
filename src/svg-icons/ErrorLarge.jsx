import React from 'react'
import Proptypes from 'prop-types'

const propTypes = {
  fill: Proptypes.string
}

const defaultProps = {
  fill: '#ffffff'

}

class ErrorLarge extends React.Component {
  render () {
    const props = this.props
    return (
      <svg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'>
        <title>icon</title>
        <path fill={props.fill} d='M40,0A40,40,0,1,0,80,40,40,40,0,0,0,40,0ZM57.41,54.59a2,2,0,1,1-2.83,2.83L40,42.83,25.41,57.41a2,2,0,0,1-2.83-2.83L37.17,40,22.59,25.41a2,2,0,0,1,2.83-2.83L40,37.17,54.59,22.59a2,2,0,0,1,2.83,2.83L42.83,40Z' />
      </svg>
    )
  }
}

ErrorLarge.defaultProps = defaultProps
ErrorLarge.propTypes = propTypes

export default ErrorLarge
