'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MUnited = function (_React$Component) {
  _inherits(MUnited, _React$Component);

  function MUnited() {
    _classCallCheck(this, MUnited);

    return _possibleConstructorReturn(this, (MUnited.__proto__ || Object.getPrototypeOf(MUnited)).apply(this, arguments));
  }

  _createClass(MUnited, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { id: 'metro-united', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 210 200' },
        _react2.default.createElement(
          'title',
          null,
          'metro-united-small-inverted'
        ),
        _react2.default.createElement(
          'g',
          { id: 'M' },
          _react2.default.createElement('path', { id: 'path', fill: '#f7a800', d: 'M207.42,80.68a2.52,2.52,0,0,1,1.28,2.2v113.5a2.42,2.42,0,0,1-2.42,2.42H157.33a2.41,2.41,0,0,1-2.41-2.42V112.87c0-2.07.56-2.74,1.75-3.42l48.22-28.75a2.51,2.51,0,0,1,2.52,0' }),
          _react2.default.createElement('path', { id: 'path-2', 'data-name': 'path', fill: '#1e428a', d: 'M208.69.33a2.55,2.55,0,0,0-2.57,0L105,62,3.87.37A2.55,2.55,0,0,0,0,2.55v195A2.45,2.45,0,0,0,2.45,200H52a2.45,2.45,0,0,0,2.45-2.45V90.31l48.09,28.94a5.65,5.65,0,0,0,2.46.89,5.66,5.66,0,0,0,2.45-.89L208.75,58.59c1.09-.64,1.25-1.33,1.25-3,0-.75,0-53,0-53A2.55,2.55,0,0,0,208.69.33Z' })
        )
      );
    }
  }]);

  return MUnited;
}(_react2.default.Component);

exports.default = MUnited;