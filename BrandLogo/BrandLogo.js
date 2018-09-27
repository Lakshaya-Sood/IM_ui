'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  href: _propTypes2.default.string
};

var defaultProps = {
  href: ''
};

var BrandLogo = function (_React$Component) {
  _inherits(BrandLogo, _React$Component);

  function BrandLogo(props) {
    _classCallCheck(this, BrandLogo);

    var _this = _possibleConstructorReturn(this, (BrandLogo.__proto__ || Object.getPrototypeOf(BrandLogo)).call(this, props));

    _this.handleLogoClick = _this.handleLogoClick.bind(_this);
    return _this;
  }

  _createClass(BrandLogo, [{
    key: 'handleLogoClick',
    value: function handleLogoClick() {
      var props = this.props;
      props.headerOptions.handleLogoClick && props.headerOptions.handleLogoClick();
      // props.href && (window.location = props.href);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var style = '';
      props.onLogoClick && (style = 'fui-clickable');
      var brandLogo = props.logoVariant === 'm' ? require('./brand_logo_m.png') : require('./brand-logo.png');
      return _react2.default.createElement(
        'div',
        { className: style, onClick: this.handleLogoClick, style: { padding: '25px 22px' } },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('img', { src: props.headerOptions.imageSrc || brandLogo, style: {
              'max-width': '130px',
              height: '25px'
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'text-white-base', style: { fontSize: '16px' } },
          props.headerOptions.productName || null
        )
      );
    }
  }]);

  return BrandLogo;
}(_react2.default.Component);

BrandLogo.propTypes = propTypes;
BrandLogo.defaultProps = defaultProps;

exports.default = BrandLogo;