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

var Reload = function (_React$Component) {
  _inherits(Reload, _React$Component);

  function Reload() {
    _classCallCheck(this, Reload);

    return _possibleConstructorReturn(this, (Reload.__proto__ || Object.getPrototypeOf(Reload)).apply(this, arguments));
  }

  _createClass(Reload, [{
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
        _react2.default.createElement('path', { fill: props.fill, d: 'M29,16A13,13,0,0,1,10.52,27.79,1,1,0,1,1,11.37,26,11,11,0,1,0,5,16c0,.35,0,.7.05,1l1.11-1.68a1,1,0,1,1,1.67,1.11l-2.65,4a1,1,0,0,1-.74.44h-.1a1,1,0,0,1-.71-.29L.29,17.26a1,1,0,0,1,1.42-1.41l1.35,1.36C3,16.81,3,16.4,3,16a13,13,0,0,1,26,0Z' })
      );
    }
  }]);

  return Reload;
}(_react2.default.Component);

Reload.defaultProps = defaultProps;
Reload.propTypes = propTypes;

exports.default = Reload;