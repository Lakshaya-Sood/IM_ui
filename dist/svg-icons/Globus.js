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

var Globus = function (_React$Component) {
  _inherits(Globus, _React$Component);

  function Globus() {
    _classCallCheck(this, Globus);

    return _possibleConstructorReturn(this, (Globus.__proto__ || Object.getPrototypeOf(Globus)).apply(this, arguments));
  }

  _createClass(Globus, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      return _react2.default.createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' },
        _react2.default.createElement('path', { fill: props.fill, id: 'globus-a',
          d: 'M27.929,5.374 C30.452,8.204 32,11.92 32,16 C32,24.822 24.822,32 16,32 C7.178,32 0,24.822 0,16 C0,7.178 7.178,0 16,0 C17.585,0 19.113,0.24 20.561,0.671 C20.58,0.675 20.599,0.681 20.618,0.686 C23.379,1.52 25.816,3.088 27.729,5.153 C27.805,5.219 27.876,5.289 27.929,5.374 Z M16,30 C23.72,30 30,23.72 30,16 C30,13.021 29.058,10.262 27.465,7.99 C26.924,9.26 25.949,10.84 24.273,11.678 C24.06,11.783 23.812,11.811 23.584,11.753 C22.479,11.478 21.376,11.801 20.683,12.126 C20.927,12.551 21.176,13.149 21.413,13.993 C21.599,13.974 21.895,13.892 22.074,13.802 C22.46,13.611 22.923,13.685 23.229,13.989 C25.053,15.812 22.768,18.188 21.54,19.465 C21.412,19.597 21.263,19.753 21.133,19.894 C21.439,20.167 21.854,20.592 21.877,21.233 C21.894,21.707 21.69,22.16 21.272,22.577 C20.645,23.205 20.018,23.603 19.568,23.838 C19.283,26.105 17.508,27.436 14.695,27.436 C13.14,27.436 11.739,23.959 11.739,23.174 C11.739,22.612 11.979,22.134 12.171,21.749 C12.253,21.585 12.39,21.312 12.392,21.218 C12.338,21.077 11.852,20.441 11.379,19.968 C11.192,19.78 11.087,19.526 11.087,19.261 C11.087,18.618 10.941,18.43 10.896,18.388 C10.681,18.181 9.875,18.228 9.229,18.265 C8.884,18.285 8.528,18.305 8.174,18.305 C5.836,18.305 5.218,15.944 5.218,14.696 C5.218,14.477 5.264,9.302 9.282,8.499 C11.095,8.136 12.343,8.261 13.097,8.878 C13.344,9.081 13.508,9.317 13.608,9.547 C14.195,9.887 15.332,9.623 16.259,9.407 C16.532,9.344 16.798,9.282 17.054,9.233 C17.119,8.521 17.136,7.83 17.101,7.369 C16.349,7.585 15.609,7.528 15.003,7.191 C14.256,6.776 13.793,6 13.699,5.007 C13.577,3.686 14.734,2.706 16.135,2.007 C16.089,2.006 16.045,2 16,2 C8.28,2 2,8.28 2,16 C2,23.72 8.28,30 16,30 Z M25.982,6.201 C24.424,4.614 22.493,3.399 20.332,2.694 C17.613,3.304 15.65,4.386 15.691,4.821 C15.708,5.003 15.768,5.328 15.975,5.443 C16.162,5.548 16.502,5.501 16.857,5.323 C17.361,5.07 17.895,5.1 18.32,5.406 C18.617,5.62 19.518,6.27 18.946,10.272 C18.876,10.765 18.454,11.131 17.956,11.131 C17.676,11.131 17.187,11.245 16.712,11.355 C15.285,11.687 13.334,12.139 12.032,10.838 C11.909,10.715 11.821,10.563 11.775,10.398 C11.618,10.331 11.069,10.181 9.675,10.459 C7.246,10.945 7.218,14.659 7.218,14.696 C7.219,14.757 7.244,16.305 8.174,16.305 C8.49,16.305 8.807,16.286 9.114,16.269 C10.249,16.202 11.426,16.137 12.271,16.934 C12.743,17.381 13.008,18.008 13.071,18.842 C13.657,19.473 14.392,20.423 14.392,21.218 C14.392,21.78 14.152,22.259 13.96,22.644 C13.878,22.807 13.741,23.081 13.739,23.175 C13.794,23.58 14.514,24.997 14.925,25.432 C17.608,25.345 17.608,23.719 17.608,23.174 C17.608,22.744 17.884,22.362 18.292,22.226 C18.293,22.226 18.98,21.979 19.71,21.306 C19.389,21.026 18.913,20.606 18.913,19.914 C18.913,19.311 19.334,18.873 20.099,18.078 C20.532,17.627 21.498,16.623 21.799,15.953 C21.178,16.042 20.435,15.978 19.858,15.404 C19.73,15.276 19.64,15.115 19.596,14.939 C19.406,14.187 19.098,13.35 18.898,13.032 C18.618,12.941 18.387,12.746 18.26,12.478 C18.191,12.333 18.002,11.815 18.449,11.27 C19.091,10.487 21.382,9.344 23.664,9.729 C25.075,8.848 25.735,7.062 25.982,6.201 Z' })
      );
    }
  }]);

  return Globus;
}(_react2.default.Component);

Globus.defaultProps = defaultProps;
Globus.propTypes = propTypes;

exports.default = Globus;