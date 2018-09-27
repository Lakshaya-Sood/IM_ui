import React from 'react'
import Proptypes from 'prop-types'

const propTypes = {
  fill: Proptypes.string
}

const defaultProps = {
  fill: '#ffffff'

}

class Upload extends React.Component {
  render () {
    const props = this.props
    return (
      <svg version='1.1' id='Layer_1'x='0px' y='0px'
        viewBox='0 0 24 24' enable-background='new 0 0 24 24' >
        <g>
          <polyline fill='none' stroke={props.fill} stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' points='20,17 17.5,14.5 15,17 ' />
          <circle fill='none' stroke={props.fill} stroke-linejoin='round' stroke-miterlimit='10' cx='17.5' cy='17.5' r='6' />

          <line fill='none' stroke={props.fill} stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='17.5' y1='20.5' x2='17.5' y2='14.5' />
        </g>
        <g>
          <polyline fill='none' stroke={props.fill} stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' points='10.5,21.5 0.5,21.5 0.5,0.5 11.5,0.5 16.5,5.5 16.5,9.5 ' />
          <polyline fill='none' stroke={props.fill} stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' points='11.5,0.5 11.5,5.5 16.5,5.5 ' />
        </g>
        <g id='Invisible_Shape' >
          <rect fill='none' width='24' height='24' />
        </g>
      </svg>
    )
  }
}

Upload.defaultProps = defaultProps
Upload.propTypes = propTypes

export default Upload
