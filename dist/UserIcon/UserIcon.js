'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Badge = require('material-ui/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _Popover = require('../Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _StyleConfig = require('../zutils/StyleConfig');

var _User = require('../User.Profile');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var userIconStyle = _StyleConfig.FuiTheme.userIcon;
var primaryBadgeStyle = _StyleConfig.FuiTheme.badge.primary;
// todo: userIconStyle not working, make it work

var propTypes = {
  notification: _react.PropTypes.number,
  title: _react.PropTypes.string,
  subtitle: _react.PropTypes.string,
  overlayContent: _react.PropTypes.string
};

var defaultProps = {
  notification: 0
};

var styles = {
  smallIcon: {
    width: 32,
    height: 32,
    margin: '0 auto'
  },
  userName: {
    position: 'relative',
    bottom: '18px'
  }
};

var UserIcon = function (_React$Component) {
  _inherits(UserIcon, _React$Component);

  function UserIcon(props) {
    _classCallCheck(this, UserIcon);

    var _this = _possibleConstructorReturn(this, (UserIcon.__proto__ || Object.getPrototypeOf(UserIcon)).call(this, props));

    _this.renderUserIcon = _this.renderUserIcon.bind(_this);
    return _this;
  }

  _createClass(UserIcon, [{
    key: 'renderUserIcon',
    value: function renderUserIcon() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _IconButton2.default,
          {
            onClick: this.props.onUserProfileClick,
            style: { height: '80px', width: '80px' } },
          _react2.default.createElement(_User2.default, { notificationCount: this.props.notification })
        ),
        _react2.default.createElement(
          'div',
          { className: 'hidden-xs', style: { display: 'inline-block' } },
          _react2.default.createElement(
            'div',
            { style: userIconStyle.title },
            _react2.default.createElement(
              'small',
              null,
              this.props.title
            )
          ),
          _react2.default.createElement(
            'div',
            { style: userIconStyle.subtitle },
            _react2.default.createElement(
              'small',
              null,
              this.props.subtitle
            )
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      //
      if (props.children) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _Popover2.default,
            { trigger: this.renderUserIcon() },
            props.children
          )
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        this.renderUserIcon()
      );
    }
  }]);

  return UserIcon;
}(_react2.default.Component);

UserIcon.propTypes = propTypes;
UserIcon.defaultProps = defaultProps;

exports.default = UserIcon;