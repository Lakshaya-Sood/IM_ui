'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Toolbar = require('material-ui/Toolbar');

var _BrandLogo = require('../BrandLogo');

var _BrandLogo2 = _interopRequireDefault(_BrandLogo);

var _UserIcon = require('../UserIcon');

var _UserIcon2 = _interopRequireDefault(_UserIcon);

var _CountryFlag = require('../CountryFlag');

var _CountryFlag2 = _interopRequireDefault(_CountryFlag);

var _StyleConfig = require('../zutils/StyleConfig');

var _arrowDropDown = require('material-ui/svg-icons/navigation/arrow-drop-down');

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = _StyleConfig.FuiTheme.appHeader;

var propTypes = {
  href: _react.PropTypes.string,
  headerOptions: _react.PropTypes.object
};

var defaultProps = {
  href: ''
};

var AppHeader = function (_React$Component) {
  _inherits(AppHeader, _React$Component);

  function AppHeader() {
    _classCallCheck(this, AppHeader);

    return _possibleConstructorReturn(this, (AppHeader.__proto__ || Object.getPrototypeOf(AppHeader)).apply(this, arguments));
  }

  _createClass(AppHeader, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var headerOptions = this.props.headerOptions || {};

      return _react2.default.createElement(
        _Toolbar.Toolbar,
        { style: style },
        _react2.default.createElement(
          _Toolbar.ToolbarGroup,
          { firstChild: true },
          props.getSidebar && props.getSidebar(),
          _react2.default.createElement(_BrandLogo2.default, props)
        ),
        _react2.default.createElement(
          _Toolbar.ToolbarGroup,
          { firstChild: true },
          headerOptions.countryFlag && headerOptions.countryFlag.countryLabel && _react2.default.createElement(
            'div',
            { style: { display: 'inline-block', paddingRight: '15px', color: 'white' } },
            headerOptions.countryFlag.countryLabel
          ),
          headerOptions.countryFlag && headerOptions.countryFlag.countryCode ? _react2.default.createElement(_CountryFlag2.default, { countryCode: headerOptions.countryFlag.countryCode }) : null,
          headerOptions.countryFlag && headerOptions.countryFlag.handleClick ? _react2.default.createElement(_arrowDropDown2.default, { style: { color: 'white' }, onClick: headerOptions.countryFlag.handleClick }) : null,
          _react2.default.createElement(
            _UserIcon2.default,
            _extends({}, props, { title: headerOptions.userIconTitle, subtitle: headerOptions.userIconSubtitle }),
            headerOptions.userIcon && headerOptions.userIcon.dropdownContent
          )
        )
      );
    }
  }]);

  return AppHeader;
}(_react2.default.Component);

AppHeader.propTypes = propTypes;
AppHeader.defaultProps = defaultProps;

exports.default = AppHeader;