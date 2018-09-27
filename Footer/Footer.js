'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _DropDownMenu = require('material-ui/DropDownMenu');

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

var _Toolbar = require('material-ui/Toolbar');

var _StyleConfig = require('../zutils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = _StyleConfig.FuiTheme.appFooter;

var propTypes = {
  languages: _react.PropTypes.array,
  selectedLanguage: _react.PropTypes.string,
  onLanguageChange: _react.PropTypes.func
};

var defaultProps = {
  languages: [],
  selectedLanguage: '',
  onLanguageChange: function onLanguageChange() {}
};

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      var items = props.languages.map(function (item) {
        return _react2.default.createElement(_MenuItem2.default, { value: item.code, key: item.code, primaryText: item.name });
      });

      return _react2.default.createElement(
        _Toolbar.Toolbar,
        { style: style },
        _react2.default.createElement(
          _Toolbar.ToolbarGroup,
          null,
          _react2.default.createElement(_Toolbar.ToolbarTitle, { style: { color: '#667284', fontSize: '14px', lineHeight: '48px' }, text: '\xA9 2018 METRO Group' })
        ),
        _react2.default.createElement(
          _Toolbar.ToolbarGroup,
          { lastChild: true },
          _react2.default.createElement(
            _DropDownMenu2.default,
            { value: props.selectedLanguage, onChange: props.onLanguageChange },
            items
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

exports.default = Footer;