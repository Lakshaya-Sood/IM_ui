'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moment = require('moment');
var momentLocalizer = require('react-widgets/lib/localizers/moment');
momentLocalizer(moment);
var DateTimePicker = require('react-widgets/lib/DateTimePicker');
// const dateUtils = require('../../../utils/dateUtils');

var dateTimePickerDefaults = {
  editFormat: 'hh:mm:ss',
  format: 'DD.MM.YYYY',
  defaultValue: null,
  placeholder: 'HH:MM a'
};

var DateTimePickerV2 = _react2.default.createClass({
  displayName: 'DateTimePickerV2',
  getInitialState: function getInitialState() {
    return {
      value: this.props.value || null
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(np) {
    this.setState({
      value: np.value || null
    });
  },
  _getMinDate: function _getMinDate() {
    // either parent supplied min date or current date
    return this.props.minDate || new Date();
  },
  _handleChange: function _handleChange(value) {
    // if typed/seleted date is not a past date,update the output
    //    if (dateUtils.isSameOrAfter(value, minDate, 'day')) {
    //      output = value;
    //    }
    // if(moment(value).isSameOrAfter(moment(minDate), 'day')) {
    // output = value;
    // }
    // console.log(value);
    var output = moment(value, 'hh:mm a').toDate();
    console.log(output);
    // output = moment(output).toDate();
    // console.log(output);
    this.props.onChange(output);
  },
  render: function render() {
    var value = null;

    var className = this.props.className ? 'form-group' + (' ' + this.props.className) : 'form-group';
    var errMessageClass = this.props.errorMessageClassName ? 'datepicker-error' + (' ' + this.props.errorMessageClassName) : 'datepicker-error';

    // <span className='help-block text-red-shade1'>Please enter valid date</span>
    return _react2.default.createElement(
      'div',
      { className: className },
      _react2.default.createElement(
        'label',
        { style: this.props.labelStyle || null },
        this.props.label
      ),
      _react2.default.createElement(DateTimePicker, { className: 'calendar-right',
        onChange: this._handleChange,
        value: this.props.value,
        placeholder: dateTimePickerDefaults.placeholder,
        calendar: false,
        time: true,
        step: this.props.step
      }),
      _react2.default.createElement(
        'span',
        { className: errMessageClass, style: this.props.errorMessageStyle },
        this.props.errorMessage
      )
    );
  }
});

module.exports = DateTimePickerV2;