'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // this component wraps dateTimePicker so that it can be used
// within formsy-react forms
// this component needs formsy.form element present in the parent heirarchy
// if formy is not present then use dateTimePicker component directly


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _Datepicker = require('./Datepicker');

var _Datepicker2 = _interopRequireDefault(_Datepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormDateTimePickerV2 = _react2.default.createClass({
  displayName: 'FormDateTimePickerV2',

  mixins: [_formsyReact2.default.Mixin],

  handleChange: function handleChange(value) {
    this.setValue(value);
    this.props.onChange(value);
  },
  render: function render() {
    return _react2.default.createElement(_Datepicker2.default, _extends({}, this.props, {
      time: false,
      value: this.getValue(),
      onChange: this.handleChange
    }));
  }
});

module.exports = FormDateTimePickerV2;