'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _StyleConfig = require('../zutils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var checkboxStyle = _StyleConfig.FuiTheme.checkbox;

var muiTheme = (0, _getMuiTheme2.default)({
  fontFamily: 'Lato, sans-serif',
  checkbox: {
    checkedColor: checkboxStyle.checkedColor
  },
  radioButton: {
    checkedColor: checkboxStyle.checkedColor
  }
});

var propTypes = {};

var defaultProps = {};

var FuiThemeProvider = function (_React$Component) {
  _inherits(FuiThemeProvider, _React$Component);

  function FuiThemeProvider() {
    _classCallCheck(this, FuiThemeProvider);

    return _possibleConstructorReturn(this, (FuiThemeProvider.__proto__ || Object.getPrototypeOf(FuiThemeProvider)).apply(this, arguments));
  }

  _createClass(FuiThemeProvider, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        _extends({ muiTheme: muiTheme }, props),
        props.children
      );
    }
  }]);

  return FuiThemeProvider;
}(_react2.default.Component);

FuiThemeProvider.propTypes = propTypes;
FuiThemeProvider.defaultProps = defaultProps;

exports.default = FuiThemeProvider;