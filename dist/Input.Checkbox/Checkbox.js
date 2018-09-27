'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _StyleConfig = require('../zutils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var checkboxStyle = _StyleConfig.FuiTheme.checkbox;

var propTypes = {
  label: _react2.default.PropTypes.string,
  onCheck: _react2.default.PropTypes.function,
  disabled: _react2.default.PropTypes.bool
};

var defaultProps = {
  label: '',
  onCheck: null,
  disabled: false
};

var FuiCheckbox = function (_React$Component) {
  _inherits(FuiCheckbox, _React$Component);

  function FuiCheckbox() {
    _classCallCheck(this, FuiCheckbox);

    return _possibleConstructorReturn(this, (FuiCheckbox.__proto__ || Object.getPrototypeOf(FuiCheckbox)).apply(this, arguments));
  }

  _createClass(FuiCheckbox, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      return _react2.default.createElement(_Checkbox2.default, {
        disabled: props.disabled,
        label: props.label || '',
        onCheck: props.onChange,
        labelStyle: checkboxStyle.labelStyle
      });
    }
  }]);

  return FuiCheckbox;
}(_react2.default.Component);

FuiCheckbox.propTypes = propTypes;
FuiCheckbox.defaultProps = defaultProps;

exports.default = FuiCheckbox;