'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  open: _react.PropTypes.boolean,
  message: _react.PropTypes.string,
  duration: _react.PropTypes.string,
  fuistyle: _react.PropTypes.string
};

var defaultProps = {
  open: false,
  duration: 4000
};

var style = {
  top: '80px'
};

var SnackBar = function (_React$Component) {
  _inherits(SnackBar, _React$Component);

  function SnackBar(props) {
    _classCallCheck(this, SnackBar);

    var _this = _possibleConstructorReturn(this, (SnackBar.__proto__ || Object.getPrototypeOf(SnackBar)).call(this, props));

    _this.warning = function (msg) {
      _this.setState({
        open: true,
        message: msg,
        fuistyle: 'warning'
      });
    };

    _this.success = function (msg, isShow) {
      _this.setState({
        open: true,
        message: msg,
        fuistyle: 'success'
      });
    };

    _this.info = function (msg, isShow) {
      _this.setState({
        open: true,
        message: msg,
        fuistyle: 'info'
      });
    };

    _this.primary = function (msg, isShow) {
      _this.setState({
        open: true,
        message: msg,
        fuistyle: 'primary'
      });
    };

    _this.handleRequestClose = function () {
      _this.setState({
        open: false
      });
    };

    _this.state = {
      open: false,
      message: '',
      fuistyle: 'success'
    };
    return _this;
  }

  _createClass(SnackBar, [{
    key: 'render',
    value: function render() {

      var props = this.props;
      var state = this.state;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Snackbar2.default, {
          open: state.open,
          message: state.message,
          className: 'snack-bar-' + state.fuistyle,
          style: style,
          autoHideDuration: props.duration || defaultProps.duration,
          onRequestClose: this.handleRequestClose
        })
      );
    }
  }]);

  return SnackBar;
}(_react2.default.Component);

SnackBar.propTypes = propTypes;
SnackBar.defaultProps = defaultProps;
exports.default = SnackBar;