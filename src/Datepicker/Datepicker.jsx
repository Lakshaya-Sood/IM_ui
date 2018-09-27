import React from 'react'
var moment = require('moment')
var momentLocalizer = require('react-widgets/lib/localizers/moment')
momentLocalizer(moment)
var DateTimePicker = require('react-widgets/lib/DateTimePicker')

const dateTimePickerDefaults = {
  editFormat: 'DD.MM.YYYY',
  format: 'DD.MM.YYYY',
  defaultValue: null,
  placeholder: 'dd.mm.yyyy'
}

const DateTimePickerV2 = React.createClass({
  getInitialState () {
    return {
      value: this.props.value || null
    }
  },

  componentWillReceiveProps (np) {
    this.setState({
      value: np.value || null
    })
  },

  _getMinDate () {
    // either parent supplied min date or current date
    return this.props.minDate || new Date()
  },

  _handleChange (value) {
    // called when either date is selected in the datepicker or
    // focus is removed from the datepicker field
    /* let minDate = this._getMinDate(), //minimum allowed date
      output = null;
    //if typed/seleted date is not a past date,update the output
//    if (dateUtils.isSameOrAfter(value, minDate, 'day')) {
//      output = value;
//    }
    if(moment(value).isSameOrAfter(moment(minDate), 'day')) {
      output = value;
    }
    this.props.onChange(output); */
    this.props.onChange(value)
  },

  _handlePartialChange: function (event) {
    // called while the date is typed in the field
    // TODO: may event want to emit date other thatn enter keypress

    let me = this,
      enteredDate = event.target.value
    // if enter button is hit, lets check if the date is a valid date
    if (event.keyCode === 13) {
      event.preventDefault()

      // if there is a valid value due to typing, update the date
      // me._handleChange(dateUtils.toDate(enteredDate, dateTimePickerDefaults.editFormat));
      me._handleChange(moment(enteredDate, dateTimePickerDefaults.editFormat).toDate())
    }
  },
  renderLabel () {
    if (this.props.label != null) {
      return (
        <label className='fui-input-label' style={this.props.labelStyle || null}>{this.props.label}</label>)
    }
  },
  render () {
    let value = null

    const className = this.props.className ? ('form-group' + (' ' + this.props.className)) : 'form-group'
    const errMessageClass = this.props.errorMessageClassName ? ('datepicker-error' + (' ' + this.props.errorMessageClassName)) : 'datepicker-error'

    // if the value is present in the state, then display it
    if (this.state.value) {
      value = moment(this.state.value).toDate()
    }

    // <span className='help-block text-red-shade1'>Please enter valid date</span>
    return (
      <div className={className}>
        {this.renderLabel()}
        <DateTimePicker className='calendar-right'
          onKeyDown={this._handlePartialChange}
          onChange={this._handleChange}
          value={value}
          defaultValue={this.props.defaultValue || dateTimePickerDefaults.defaultValue}
          editFormat={this.props.editFormat || dateTimePickerDefaults.editFormat}
          placeholder={this.props.placeholder || dateTimePickerDefaults.placeholder}
          calendar={this.props.calendar}
          time={this.props.time}
          min={this.props.min || new Date(dateTimePickerDefaults.defaultValue)}
          max={this.props.max}
          format={this.props.format || dateTimePickerDefaults.format}
          />
        <span className={errMessageClass} style={this.props.errorMessageStyle}>{this.props.errorMessage}</span>
      </div>
    )
  }
})

module.exports = DateTimePickerV2
