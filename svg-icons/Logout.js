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
  fill: _propTypes2.default.string
};

var defaultProps = {
  fill: '#ffffff'

};

var Logout = function (_React$Component) {
  _inherits(Logout, _React$Component);

  function Logout() {
    _classCallCheck(this, Logout);

    return _possibleConstructorReturn(this, (Logout.__proto__ || Object.getPrototypeOf(Logout)).apply(this, arguments));
  }

  _createClass(Logout, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      return _react2.default.createElement(
        'svg',
        { id: 'Ebene_1', 'data-name': 'Ebene 1', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' },
        _react2.default.createElement(
          'title',
          null,
          'icon'
        ),
        _react2.default.createElement('path', { fill: props.fill, d: 'M23.17,25.43a1,1,0,0,0-1,1v1H13.74V4.61h8.43V6.87a1,1,0,1,0,2,0V3.61a1,1,0,0,0-1-1H13.74V1a1,1,0,0,0-1.22-1L.78,2.63a1,1,0,0,0-.78,1V28.39a1,1,0,0,0,.78,1L12.52,32l.22,0a1,1,0,0,0,1-1V29.39h9.43a1,1,0,0,0,1-1v-2A1,1,0,0,0,23.17,25.43ZM11.74,29.75,2,27.59V4.41l9.74-2.16ZM32,16.66h0a1,1,0,0,1-.33.73l-5.18,5.18a1,1,0,0,1-1.41-1.41l3.5-3.5H17.3a1,1,0,0,1,0-2H28.6l-3.52-3.52a1,1,0,0,1,1.41-1.41l5.22,5.22a1,1,0,0,1,.29.71Z' })
      );
    }
  }]);

  return Logout;
}(_react2.default.Component);

Logout.defaultProps = defaultProps;
Logout.propTypes = propTypes;

exports.default = Logout;