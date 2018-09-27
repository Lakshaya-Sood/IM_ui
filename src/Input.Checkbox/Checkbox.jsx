import React, {PropTypes} from 'react'
import Checkbox from 'material-ui/Checkbox'
import {FuiTheme} from '../zutils/StyleConfig'
const checkboxStyle = FuiTheme.checkbox

const propTypes = {
  label: React.PropTypes.string,
  onCheck: React.PropTypes.function,
  disabled: React.PropTypes.bool
}

const defaultProps = {
  label: '',
  onCheck: null,
  disabled: false
}

class FuiCheckbox extends React.Component {
  render () {
    const props = this.props
    return (
      <Checkbox
        disabled={props.disabled}
        label={props.label || ''}
        onCheck={props.onChange}
        labelStyle={checkboxStyle.labelStyle}
      />
    )
  }
}

FuiCheckbox.propTypes = propTypes
FuiCheckbox.defaultProps = defaultProps

export default FuiCheckbox
