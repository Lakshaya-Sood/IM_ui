'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = _react2.default.createClass({
  displayName: 'Select',

  mixins: [_formsyReact2.default.Mixin],

  changeValue: function changeValue(event) {
    this.setValue(event.currentTarget.value);
    this.props.onChange && this.props.onChange(event.currentTarget.value);
  },
  render: function render() {
    var className = 'm-input m-input-name' + (' ' + (this.props.className + ' ') || ' ') + (this.showRequired() ? 'required' : this.showError() ? 'error' : '');
    var errorMessage = this.getErrorMessage();
    var helpMessage = this.props.helpMessage || null;

    var options = this.props.options.map(function (option, i) {
      return _react2.default.createElement(
        'option',
        { key: option.title + option.value, value: option.value },
        option.title
      );
    });

    return _react2.default.createElement(
      'div',
      { className: className },
      _react2.default.createElement(
        'label',
        { htmlFor: this.props.name, className: 'fui-input-label' },
        this.props.title
      ),
      _react2.default.createElement(
        'select',
        { className: 'm-input-element m-extra-class-on-input-tag', disabled: this.props.disabled || false, name: this.props.name, onChange: this.changeValue, value: this.getValue() },
        options
      ),
      _react2.default.createElement(
        'span',
        { className: 'help-block text-muted' },
        helpMessage
      ),
      _react2.default.createElement(
        'span',
        { className: 'm-input-errorMessage' },
        errorMessage
      )
    );
  }
});

exports.default = Select;