'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Stylist = require('../zutils/Stylist');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// toto check button styleing disabled state is not working
// button in loading state
var propTypes = {
  disabled: _propTypes2.default.boolean,
  fuiStyle: _propTypes2.default.string,
  label: _propTypes2.default.string,
  title: _react2.default.PropTypes.string,
  subtitle: _react2.default.PropTypes.string
};

var defaultProps = {
  disabled: false,
  fuiStyle: 'default',
  label: '',
  title: '',
  subtitle: ''
};

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var style = (0, _Stylist.getButtonStyle)(props.fuiStyle);
      var type = props.type ? 'fui-flat-btn' : '';
      var size = props.size ? (0, _Stylist.getButtonSize)(props.size) : props.fullWidth !== true ? 'fab-btn-basic' : '';
      var obj = [style, size, type].join(' ');

      return props.type === 'flat' ? _react2.default.createElement(
        _FlatButton2.default,
        _extends({}, props, { className: obj }),
        props.children
      ) : _react2.default.createElement(
        _RaisedButton2.default,
        _extends({}, props, { className: obj }),
        props.children
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
exports.default = Button;