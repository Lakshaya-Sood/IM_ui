'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SidneyOption = require('./SidneyOption');

var _SidneyOption2 = _interopRequireDefault(_SidneyOption);

var _User = require('../User.Profile');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  onUserProfileClick: _propTypes2.default.func,
  notificationCount: _propTypes2.default.number,
  selected: _propTypes2.default.bool
};
var defaultProps = {
  onUserProfileClick: function onUserProfileClick() {},
  notificationCount: 0,
  selected: false
};

var UserProfile = function (_React$Component) {
  _inherits(UserProfile, _React$Component);

  function UserProfile() {
    _classCallCheck(this, UserProfile);

    return _possibleConstructorReturn(this, (UserProfile.__proto__ || Object.getPrototypeOf(UserProfile)).apply(this, arguments));
  }

  _createClass(UserProfile, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      return _react2.default.createElement(
        'div',
        { title: 'My Profile' },
        _react2.default.createElement(_SidneyOption2.default, {
          expand: props.expand,
          selected: props.selected,
          onClick: props.onUserProfileClick,
          label: 'My Profile',
          icon: _react2.default.createElement(_User2.default, {
            badgeStyle: { width: '16px', height: '16px' },
            iconStyle: { width: '28px', height: '28px' },
            notificationCount: props.notificationCount }) })
      );
    }
  }]);

  return UserProfile;
}(_react2.default.Component);

UserProfile.propTypes = propTypes;
UserProfile.defaultProps = defaultProps;

exports.default = UserProfile;