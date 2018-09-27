'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Popover = require('material-ui/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _StyleConfig = require('../zutils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  trigger: _react2.default.PropTypes.func
};

var defaultProps = {
  trigger: null
};

var FuiPopover = function (_React$Component) {
  _inherits(FuiPopover, _React$Component);

  function FuiPopover(props) {
    _classCallCheck(this, FuiPopover);

    var _this = _possibleConstructorReturn(this, (FuiPopover.__proto__ || Object.getPrototypeOf(FuiPopover)).call(this, props));

    _this.handleTouchTap = function (event) {
      // This prevents ghost click.
      event.preventDefault();
      _this.setState({
        open: true,
        anchorEl: event.currentTarget
      });
    };

    _this.handleRequestClose = function () {
      _this.setState({
        open: false
      });
      _this.props.onRequestClose && _this.props.onRequestClose();
    };

    _this.state = {
      open: false
    };
    _this.renderTrigger = _this.renderTrigger.bind(_this);
    return _this;
  }

  _createClass(FuiPopover, [{
    key: 'renderTrigger',
    value: function renderTrigger() {
      return _react2.default.createElement(
        'span',
        { onClick: this.handleTouchTap },
        this.props.trigger
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        null,
        this.renderTrigger(),
        _react2.default.createElement(
          _Popover2.default,
          {
            open: this.state.open,
            anchorEl: this.state.anchorEl,
            anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
            targetOrigin: { horizontal: 'left', vertical: 'top' },
            onRequestClose: this.handleRequestClose,
            animation: this.props.animation,
            style: this.props.popoverStyle
          },
          this.props.children
        )
      );
    }
  }]);

  return FuiPopover;
}(_react2.default.Component);

FuiPopover.propTypes = propTypes;
FuiPopover.defaultProps = defaultProps;

exports.default = FuiPopover;