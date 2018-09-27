'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RadioButton = require('material-ui/RadioButton');

var _StyleConfig = require('../zutils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var radioButtonStyle = _StyleConfig.FuiTheme.radiobutton;

var FuiRadioButton = function (_React$Component) {
  _inherits(FuiRadioButton, _React$Component);

  function FuiRadioButton() {
    _classCallCheck(this, FuiRadioButton);

    return _possibleConstructorReturn(this, (FuiRadioButton.__proto__ || Object.getPrototypeOf(FuiRadioButton)).apply(this, arguments));
  }

  _createClass(FuiRadioButton, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var options = props.options.map(function (option, i) {
        return _react2.default.createElement(_RadioButton.RadioButton, {
          label: option.label,
          value: option.value,
          labelStyle: radioButtonStyle.labelStyle,
          disabled: option.disabled });
      });

      return _react2.default.createElement(
        _RadioButton.RadioButtonGroup,
        {
          name: props.name,
          defaultSelected: props.defaultSelected || '',
          valueSelected: props.valueSelected,
          onChange: props.onChange,
          style: props.style || {}
        },
        options
      );
    }
  }]);

  return FuiRadioButton;
}(_react2.default.Component);

exports.default = FuiRadioButton;