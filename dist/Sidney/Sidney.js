'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyleConfig = require('../zutils/StyleConfig');

var _Expand = require('./Expand');

var _Expand2 = _interopRequireDefault(_Expand);

var _Profile = require('./Profile');

var _Profile2 = _interopRequireDefault(_Profile);

var _Version = require('./Version');

var _Version2 = _interopRequireDefault(_Version);

var _Logo = require('./Logo');

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  containerStyle: _react.PropTypes.object,
  onLogoClick: _react.PropTypes.func,
  onExpandClick: _react.PropTypes.func,
  onUserProfileClick: _react.PropTypes.func,
  notificationCount: _react.PropTypes.number,
  appVersion: _react.PropTypes.string
};

var defaultProps = {
  containerStyle: {},
  onLogoClick: null,
  onExpandClick: function onExpandClick() {},
  onUserProfileClick: function onUserProfileClick() {},
  notificationCount: 0,
  appVersion: ''
};

var Sidney = function (_React$Component) {
  _inherits(Sidney, _React$Component);

  function Sidney() {
    _classCallCheck(this, Sidney);

    return _possibleConstructorReturn(this, (Sidney.__proto__ || Object.getPrototypeOf(Sidney)).apply(this, arguments));
  }

  _createClass(Sidney, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var expandedStyle = {};
      if (props.expand) {
        expandedStyle = { width: '240px' };
      }
      var containerStyle = Object.assign({}, _StyleConfig.FuiTheme.sidney, expandedStyle, props.containerStyle);

      var childrenWithProps = _react2.default.Children.map(props.children, function (child) {
        return _react2.default.cloneElement(child, {
          expand: props.expand
        });
      });

      return _react2.default.createElement(
        'div',
        { style: containerStyle },
        _react2.default.createElement(_Logo2.default, { onLogoClick: props.onLogoClick, expand: props.expand }),
        childrenWithProps,
        _react2.default.createElement(
          'div',
          { style: { position: 'absolute', bottom: '0', right: 0, left: 0 } },
          _react2.default.createElement(_Profile2.default, {
            expand: props.expand,
            onUserProfileClick: props.onUserProfileClick,
            notificationCount: props.notificationCount }),
          _react2.default.createElement(_Expand2.default, { onExpandClick: props.onExpandClick, expand: props.expand }),
          _react2.default.createElement(_Version2.default, { appVersion: props.appVersion, expand: props.expand })
        )
      );
    }
  }]);

  return Sidney;
}(_react2.default.Component);

Sidney.propTypes = propTypes;
Sidney.defaultProps = defaultProps;

exports.default = Sidney;