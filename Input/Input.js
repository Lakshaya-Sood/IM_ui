'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _Input = require('../Input.Checkbox');

var _Input2 = _interopRequireDefault(_Input);

var _Input3 = require('../Input.RadioButton');

var _Input4 = _interopRequireDefault(_Input3);

var _MultiSelect = require('../MultiSelect');

var _MultiSelect2 = _interopRequireDefault(_MultiSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// todo - create a formsy less input
var Input = _react2.default.createClass({
  displayName: 'Input',


  // Add the Formsy Mixin
  mixins: [_formsyReact2.default.Mixin],

  // setValue() will set the value of the component, which in
  // turn will validate it and the rest of the form
  changeValue: function changeValue(event, isChecked) {
    if (this.props.type === 'checkbox') {
      this.props.onChange && this.props.onChange(event.currentTarget['value'], isChecked);
      return this.setValue(event.currentTarget['value'], isChecked);
    }
    this.props.onChange && this.props.onChange(event.currentTarget['value']);
    this.setValue(event.currentTarget['value']);
  },

  keyDown: function keyDown(event) {
    this.props.onKeyDown && this.props.onKeyDown(event.keyCode);
  },
  renderLabel: function renderLabel() {
    if (this.props.title != null) {
      return _react2.default.createElement(
        'label',
        { className: 'fui-input-label', htmlFor: this.props.name },
        this.props.title
      );
    }
  },
  render: function render() {
    // Set a specific className based on the validation
    // state of this component. showRequired() is true
    // when the value is empty and the required prop is
    // passed to the input. showError() is true when the
    // value typed is invalid
    var className = 'm-input m-input-name' + (' ' + (this.props.className + ' ') || ' ') + (this.props.required ? 'requiredMark ' : ' ') + (this.showError() ? 'error' : ' ');

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    var errorMessage = this.getErrorMessage();
    var helpMessage = this.props.helpMessage || null;

    if (this.props.type === 'checkbox') {
      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(_Input2.default, {
          name: this.props.name,
          label: this.props.title,
          disabled: this.props.disabled,
          onChange: this.changeValue }),
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

    if (this.props.type === 'radio') {
      return _react2.default.createElement(
        'div',
        { className: className },
        this.renderLabel(),
        _react2.default.createElement(_Input4.default, {
          name: this.props.name,
          defaultSelected: this.props.defaultSelected,
          valueSelected: this.props.valueSelected,
          onChange: this.changeValue,
          style: this.props.style,
          options: this.props.options
        }),
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

    if (this.props.type === 'multiselect') {
      return _react2.default.createElement(
        'div',
        { className: className },
        this.renderLabel(),
        _react2.default.createElement(
          _MultiSelect2.default,
          {
            label: this.props.label,
            onChange: this.props.onChange,
            value: this.props.value,
            multiple: this.props.multiple,
            disabled: this.props.disabled
          },
          this.props.options
        )
      );
    }

    if (this.props.type === 'textarea') {
      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'label',
          { className: 'fui-input-label', htmlFor: this.props.name },
          this.props.title
        ),
        _react2.default.createElement('textarea', { className: 'm-input-element m-extra-class-on-input-tag',
          type: 'text',
          name: this.props.name,
          onChange: this.changeValue,
          onKeyDown: this.keyDown,
          value: this.getValue(),
          disabled: this.props.disabled,
          placeholder: this.props.placeholder
        }),
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

    return _react2.default.createElement(
      'div',
      { className: className },
      _react2.default.createElement(
        'label',
        { className: 'fui-input-label', htmlFor: this.props.name },
        this.props.title
      ),
      _react2.default.createElement('input', {
        className: 'm-input-element extra-class-on-input-tag',
        type: this.props.type || 'text',
        name: this.props.name,
        onChange: this.changeValue,
        onKeyDown: this.keyDown,
        value: this.getValue(),
        disabled: this.props.disabled,
        placeholder: this.props.placeholder
      }),
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

exports.default = Input;