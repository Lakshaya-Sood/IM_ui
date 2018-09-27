'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Badge = require('material-ui/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _StyleConfig = require('../zutils/StyleConfig');

var _Profile = require('../svg-icons/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var userIconStyle = _StyleConfig.FuiTheme.userIcon;
var primaryBadgeStyle = _StyleConfig.FuiTheme.badge.primary;
// todo: userIconStyle not working, make it work

var propTypes = {
  notificationCount: _propTypes2.default.number,
  iconStyle: _propTypes2.default.object,
  badgeStyle: _propTypes2.default.object
};

var defaultProps = {
  notificationCount: 0,
  iconStyle: {},
  badgeStyle: {}
};

var styles = {
  smallIcon: {
    width: 32,
    height: 32,
    margin: '0 auto',
    color: '#fff'
  }
};

var UserIcon = function (_Component) {
  _inherits(UserIcon, _Component);

  function UserIcon() {
    _classCallCheck(this, UserIcon);

    return _possibleConstructorReturn(this, (UserIcon.__proto__ || Object.getPrototypeOf(UserIcon)).apply(this, arguments));
  }

  _createClass(UserIcon, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var iconStyle = Object.assign({}, styles.smallIcon, props.iconStyle);
      var badgeStyle = Object.assign({}, primaryBadgeStyle, props.badgeStyle);

      return _react2.default.createElement(
        _Badge2.default,
        {
          badgeContent: props.notificationCount,
          badgeStyle: badgeStyle,
          style: { padding: '0' } },
        _react2.default.createElement(
          'div',
          { style: iconStyle },
          _react2.default.createElement(_Profile2.default, { fill: iconStyle.color })
        )
      );
    }
  }]);

  return UserIcon;
}(_react.Component);

UserIcon.propTypes = propTypes;
UserIcon.defaultProps = defaultProps;

exports.default = UserIcon;