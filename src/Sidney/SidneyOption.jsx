import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'

const propTypes = {
  expand: PropTypes.bool,
  selected: PropTypes.bool
}
const defaultProps = {
  expand: false,
  selected: false
}

class SidneyOption extends React.Component {
  render () {
    const props = this.props

    const style = {
      height: '64px',
      width: '100%',
      minWidth: '80px',
      paddingLeft: '26px',
      lineHeight: 0,
      background: 'transparent',
      textAlign: 'left'
    }

    const labelStyle = {
      color: '#fff',
      textTransform: 'none',
      fontSize: '16px',
      opacity: 0
    }

    props.selected && (style.background = 'rgba(0,0,0, .5)')
    props.expand && (style.paddingLeft = '32px')
    props.expand && (labelStyle.opacity = 1)
    props.expand && (labelStyle.transition = 'opacity 450ms ease-in')

    return (
      <FlatButton
        backgroundColor={style.background}
        hoverColor={style.background}
        disableTouchRipple
        onClick={props.onClick}
        style={style}
        labelStyle={labelStyle}
        label={props.label}
        icon={<span style={{width: '28px', height: '28px', display: 'inline-block', marginLeft: 0}}>{props.icon}</span>}
      />
    )
  }
}

SidneyOption.propTypes = propTypes
SidneyOption.defaultProps = defaultProps

export default SidneyOption
