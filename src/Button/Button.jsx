import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import {getButtonStyle, getButtonSize} from '../zutils/Stylist'
// toto check button styleing disabled state is not working
// button in loading state
const propTypes = {
  disabled: PropTypes.boolean,
  fuiStyle: PropTypes.string,
  label: PropTypes.string,
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string
}

const defaultProps = {
  disabled: false,
  fuiStyle: 'default',
  label: '',
  title: '',
  subtitle: ''
}

class Button extends React.Component {
  render () {
    const props = this.props
    const style = getButtonStyle(props.fuiStyle)
    const type = props.type ? 'fui-flat-btn' : ''
    const size = props.size ? getButtonSize(props.size) : (props.fullWidth !== true ? 'fab-btn-basic' : '')
    const obj = [
      style, size, type
    ].join(' ')

    return (
      props.type === 'flat'
      ? <FlatButton {...props} className={obj} >
        {props.children}
      </FlatButton>
      : <RaisedButton {...props} className={obj} >
        {props.children}
      </RaisedButton>

    )
  }
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps
export default Button
