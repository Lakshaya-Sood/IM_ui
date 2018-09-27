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

var _BrandLogo = require('../BrandLogo');

var _BrandLogo2 = _interopRequireDefault(_BrandLogo);

var _UserIcon = require('../UserIcon');

var _UserIcon2 = _interopRequireDefault(_UserIcon);

var _StyleConfig = require('../zutils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = _StyleConfig.FuiTheme.appSecondaryHeader;

var propTypes = {
  href: _propTypes2.default.string,
  headerOptions: _propTypes2.default.object
};

var defaultProps = {
  href: ''
};

function _handleSelect(option) {
  this.props.onClick && this.props.onClick(option);
}

var AppHeader = function (_React$Component) {
  _inherits(AppHeader, _React$Component);

  function AppHeader() {
    _classCallCheck(this, AppHeader);

    return _possibleConstructorReturn(this, (AppHeader.__proto__ || Object.getPrototypeOf(AppHeader)).apply(this, arguments));
  }

  _createClass(AppHeader, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var headerDefs = this.props.headerDefs ? _.reject(this.props.headerDefs, { isHidden: true }) : [];

      var menuitems = headerDefs.map(function (option, i) {
        return _react2.default.createElement(_Toolbar.ToolbarTitle, {
          className: option.key === props.activeKey ? 'nav-item active' : 'nav-item',
          onClick: _handleSelect.bind(_this2, option),
          disabled: option.disabled,
          text: option.title
        });
      });

      return _react2.default.createElement(
        _Toolbar.Toolbar,
        { style: style, className: 'fui-app-header-secondary' },
        menuitems,
        props.children
      );
    }
  }]);

  return AppHeader;
}(_react2.default.Component);

AppHeader.propTypes = propTypes;
AppHeader.defaultProps = defaultProps;
exports.default = AppHeader;