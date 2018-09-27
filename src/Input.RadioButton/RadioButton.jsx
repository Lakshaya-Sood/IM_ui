import React from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import {FuiTheme} from '../zutils/StyleConfig'
const radioButtonStyle = FuiTheme.radiobutton

class FuiRadioButton extends React.Component {
  render () {
    const props = this.props
    const options = props.options.map((option, i) => (
      <RadioButton
        label={option.label}
        value={option.value}
        labelStyle={radioButtonStyle.labelStyle}
        disabled={option.disabled} />
    ))

    return (
      <RadioButtonGroup
        name={props.name}
        defaultSelected={props.defaultSelected || ''}
        valueSelected={props.valueSelected}
        onChange={props.onChange}
        style={props.style || {}}
      >
        {options}
      </RadioButtonGroup>
    )
  }
}

export default FuiRadioButton
