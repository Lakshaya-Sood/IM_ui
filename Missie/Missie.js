'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Warning = require('../svg-icons/Warning');

var _Warning2 = _interopRequireDefault(_Warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  message: _propTypes2.default.string,
  icon: _propTypes2.default.node
};

var defaultProps = {
  message: 'Failed to load data. Something Went Wrong.',
  icon: _react2.default.createElement(_Warning2.default, { fill: 'rgb(230,92,66)' })
};

var Missie = function (_React$Component) {
  _inherits(Missie, _React$Component);

  function Missie() {
    _classCallCheck(this, Missie);

    return _possibleConstructorReturn(this, (Missie.__proto__ || Object.getPrototypeOf(Missie)).apply(this, arguments));
  }

  _createClass(Missie, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'text-center' },
        _react2.default.createElement(
          'div',
          { style: { marginBottom: '32px' } },
          _react2.default.createElement(
            'div',
            { style: { height: '80px', width: '80px', margin: 'auto' } },
            this.props.icon
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { marginBottom: '32px' } },
          _react2.default.createElement(
            'span',
            null,
            this.props.message
          )
        )
      );
    }
  }]);

  return Missie;
}(_react2.default.Component);

Missie.propTypes = propTypes;
Missie.defaultProps = defaultProps;

exports.default = Missie;