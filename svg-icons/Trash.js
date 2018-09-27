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

var Trash = function (_React$Component) {
  _inherits(Trash, _React$Component);

  function Trash() {
    _classCallCheck(this, Trash);

    return _possibleConstructorReturn(this, (Trash.__proto__ || Object.getPrototypeOf(Trash)).apply(this, arguments));
  }

  _createClass(Trash, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      return _react2.default.createElement(
        'svg',
        { fill: props.fill, id: 'Ebene_1', 'data-name': 'Ebene 1', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' },
        _react2.default.createElement(
          'title',
          null,
          'icon'
        ),
        _react2.default.createElement('path', { d: 'M30,3.91H21.44V1a1,1,0,0,0-1-1H10.26a1,1,0,0,0-1,1V3.91H2a1,1,0,0,0,0,2H4.19V31a1,1,0,0,0,1,1h20.4a1,1,0,0,0,1-1V5.91H30a1,1,0,0,0,0-2ZM11.24,2h8.24V3.91H11.24ZM24.58,30H6.14V5.91H24.58Z' }),
        _react2.default.createElement('path', { d: 'M10.13,9.48a1,1,0,0,0-1,1V25.13a1,1,0,1,0,2,0V10.48A1,1,0,0,0,10.13,9.48Z' }),
        _react2.default.createElement('path', { d: 'M15.35,9.48a1,1,0,0,0-1,1V25.13a1,1,0,0,0,2,0V10.48A1,1,0,0,0,15.35,9.48Z' }),
        _react2.default.createElement('path', { d: 'M19.57,10.48V25.13a1,1,0,0,0,2,0V10.48a1,1,0,0,0-2,0Z' })
      );
    }
  }]);

  return Trash;
}(_react2.default.Component);

Trash.defaultProps = defaultProps;
Trash.propTypes = propTypes;

exports.default = Trash;