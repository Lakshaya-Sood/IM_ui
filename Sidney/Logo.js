'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Brandy = require('../Brandy');

var _Brandy2 = _interopRequireDefault(_Brandy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  onLogoClick: _propTypes2.default.func
};
var defaultProps = {
  onLogoClick: function onLogoClick() {}
};

var Logo = function (_React$Component) {
  _inherits(Logo, _React$Component);

  function Logo() {
    _classCallCheck(this, Logo);

    return _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
  }

  _createClass(Logo, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      if (props.expand) {
        return _react2.default.createElement(
          'div',
          { style: { height: '80px', padding: '12px 45px' } },
          _react2.default.createElement(_Brandy2.default, {
            onLogoClick: props.onLogoClick,
            height: 60,
            width: 120 })
        );
      }

      return _react2.default.createElement(
        'div',
        { style: { height: '80px', width: '100%', padding: '21px 4px' } },
        _react2.default.createElement(_Brandy2.default, { logoVariant: 'm', onLogoClick: props.onLogoClick })
      );
    }
  }]);

  return Logo;
}(_react2.default.Component);

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

exports.default = Logo;