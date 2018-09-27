// this component wraps dateTimePicker so that it can be used
// within formsy-react forms
// this component needs formsy.form element present in the parent heirarchy
// if formy is not present then use dateTimePicker component directly
import React from 'react'
import Formsy from 'formsy-react'
import DateTimePicker from './Datepicker'

const FormDateTimePickerV2 = React.createClass({
  mixins: [Formsy.Mixin],

  handleChange (value) {
    this.setValue(value)
    this.props.onChange(value)
  },

  render () {
    return (
      <DateTimePicker
        {...this.props}
        time={false}
        value={this.getValue()}
        onChange={this.handleChange}
        />
    )
  }
})

module.exports = FormDateTimePickerV2
