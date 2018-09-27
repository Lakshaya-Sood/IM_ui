'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = _react2.default.createClass({
  displayName: 'Dropdown',

  mixins: [_formsyReact2.default.Mixin],

  changeValue: function changeValue(event, index, value) {
    this.setValue(value);
    this.props.onChange && this.props.onChange(value);
  },
  render: function render() {
    var props = this.props;
    var className = 'form-group' + (' ' + this.props.className || ' ') + (this.showRequired() ? 'required' : this.showError() ? 'error' : '');
    var errorMessage = this.getErrorMessage();
    var helpMessage = this.props.helpMessage || null;

    var options = this.props.options.map(function (option, i) {
      return _react2.default.createElement(_MenuItem2.default, { value: option.value, primaryText: option.title });
    });

    return _react2.default.createElement(
      'div',
      { className: className },
      _react2.default.createElement(
        _SelectField2.default,
        {
          floatingLabelText: props.title,
          value: this.getValue(),
          onChange: this.changeValue,
          disabled: props.disabled,
          autoWidth: props.autoWidth,
          style: props.style,
          floatingLabelStyle: { color: '#1A3B7A', fontSize: '18px', fontWeight: 'normal' },
          underlineStyle: { borderBottom: 'none' },
          labelStyle: { color: '#666' }
        },
        options
      ),
      _react2.default.createElement(
        'span',
        { className: 'help-block text-muted' },
        helpMessage
      ),
      _react2.default.createElement(
        'span',
        { className: 'validation-error' },
        errorMessage
      )
    );
  }
});

exports.default = Dropdown;