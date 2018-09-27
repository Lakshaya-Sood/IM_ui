import React from 'react'
var moment = require('moment')
var momentLocalizer = require('react-widgets/lib/localizers/moment')
momentLocalizer(moment)
var DateTimePicker = require('react-widgets/lib/DateTimePicker')
// const dateUtils = require('../../../utils/dateUtils');

const dateTimePickerDefaults = {
  editFormat: 'hh:mm:ss',
  format: 'DD.MM.YYYY',
  defaultValue: null,
  placeholder: 'HH:MM a'
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
    // if typed/seleted date is not a past date,update the output
//    if (dateUtils.isSameOrAfter(value, minDate, 'day')) {
//      output = value;
//    }
    // if(moment(value).isSameOrAfter(moment(minDate), 'day')) {
      // output = value;
    // }
    // console.log(value);
    var output = moment(value, 'hh:mm a').toDate()
    console.log(output)
    // output = moment(output).toDate();
    // console.log(output);
    this.props.onChange(output)
  },

  render () {
    let value = null

    const className = this.props.className ? ('form-group' + (' ' + this.props.className)) : 'form-group'
    const errMessageClass = this.props.errorMessageClassName ? ('datepicker-error' + (' ' + this.props.errorMessageClassName)) : 'datepicker-error'

    // <span className='help-block text-red-shade1'>Please enter valid date</span>
    return (
      <div className={className}>
        <label style={this.props.labelStyle || null}>{this.props.label}</label>
        <DateTimePicker className='calendar-right'
          onChange={this._handleChange}
          value={this.props.value}
          placeholder={dateTimePickerDefaults.placeholder}
          calendar={false}
          time
          step={this.props.step}
        />
        <span className={errMessageClass} style={this.props.errorMessageStyle}>{this.props.errorMessage}</span>
      </div>
    )
  }
})

module.exports = DateTimePickerV2
