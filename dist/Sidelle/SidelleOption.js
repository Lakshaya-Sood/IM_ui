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
  onClick: _propTypes2.default.func
};
var defaultProps = {
  onClick: function onClick() {}
};

var SidelleOption = function (_React$Component) {
  _inherits(SidelleOption, _React$Component);

  function SidelleOption() {
    _classCallCheck(this, SidelleOption);

    return _possibleConstructorReturn(this, (SidelleOption.__proto__ || Object.getPrototypeOf(SidelleOption)).apply(this, arguments));
  }

  _createClass(SidelleOption, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var style = {
        padding: '18px 22px 17px 72px',
        position: 'relative',
        cursor: 'pointer',
        borderBottom: '1px solid #F2F3F4'
      };

      return _react2.default.createElement(
        'div',
        {
          style: style,
          onClick: props.onClick },
        _react2.default.createElement(
          'div',
          { style: {
              display: 'block',
              position: 'absolute',
              top: '14px',
              left: '32px',
              height: '28px',
              width: '28px' } },
          props.rightIcon
        ),
        _react2.default.createElement(
          'div',
          { style: { display: 'block', color: '#0064FE', fontSize: '16px', 'line-height': '20px', fontWeight: 'bold' } },
          props.label
        ),
        _react2.default.createElement(
          'div',
          { style: {
              display: 'block',
              position: 'absolute',
              top: '14px',
              right: '20px',
              height: '28px',
              width: '28px' } },
          props.leftIcon
        )
      );
    }
  }]);

  return SidelleOption;
}(_react2.default.Component);

SidelleOption.propTypes = propTypes;
SidelleOption.defaultProps = defaultProps;

exports.default = SidelleOption;