'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Toolbar = require('material-ui/Toolbar');

var _materialUi = require('material-ui');

var _Brandy = require('../Brandy');

var _Brandy2 = _interopRequireDefault(_Brandy);

var _User = require('../User.Profile');

var _User2 = _interopRequireDefault(_User);

var _StyleConfig = require('../zutils/StyleConfig');

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = _StyleConfig.FuiTheme.heather;

var propTypes = {
  isMenuOpen: _propTypes2.default.bool,
  onMenuClick: _propTypes2.default.func,
  onUserProfileClick: _propTypes2.default.func,
  onLogoClick: _propTypes2.default.func,
  notificationCount: _propTypes2.default.number
};

var defaultProps = {
  isMenuOpen: false,
  onMenuClick: function onMenuClick() {},
  onUserProfileClick: function onUserProfileClick() {},
  onLogoClick: function onLogoClick() {},
  notificationCount: 0
};

var Heather = function (_React$Component) {
  _inherits(Heather, _React$Component);

  function Heather() {
    _classCallCheck(this, Heather);

    return _possibleConstructorReturn(this, (Heather.__proto__ || Object.getPrototypeOf(Heather)).apply(this, arguments));
  }

  _createClass(Heather, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var headerOptions = {};

      return _react2.default.createElement(
        _Toolbar.Toolbar,
        { style: style },
        _react2.default.createElement(
          _Toolbar.ToolbarGroup,
          {
            style: { marginLeft: '-12px' },
            firstChild: true },
          _react2.default.createElement(_Menu2.default, {
            open: props.isMenuOpen,
            onMenuClick: props.onMenuClick })
        ),
        _react2.default.createElement(
          _Toolbar.ToolbarGroup,
          { id: 'fui-heather-brand-logo' },
          _react2.default.createElement(_Brandy2.default, {
            onLogoClick: props.onLogoClick })
        ),
        _react2.default.createElement(
          _Toolbar.ToolbarGroup,
          { style: { marginRight: '-12px' } },
          _react2.default.createElement(
            _materialUi.IconButton,
            {
              onClick: props.onUserProfileClick,
              style: { height: '56px', width: '56px' } },
            _react2.default.createElement(_User2.default, {
              badgeStyle: {
                width: '16px',
                height: '16px'
              },
              iconStyle: {
                width: '28px',
                height: '28px'
              },
              notificationCount: props.notificationCount
            })
          )
        )
      );
    }
  }]);

  return Heather;
}(_react2.default.Component);

Heather.propTypes = propTypes;
Heather.defaultProps = defaultProps;

exports.default = Heather;