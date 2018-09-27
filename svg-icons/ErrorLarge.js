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

var ErrorLarge = function (_React$Component) {
  _inherits(ErrorLarge, _React$Component);

  function ErrorLarge() {
    _classCallCheck(this, ErrorLarge);

    return _possibleConstructorReturn(this, (ErrorLarge.__proto__ || Object.getPrototypeOf(ErrorLarge)).apply(this, arguments));
  }

  _createClass(ErrorLarge, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      return _react2.default.createElement(
        'svg',
        { id: 'Ebene_1', 'data-name': 'Ebene 1', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 80 80' },
        _react2.default.createElement(
          'title',
          null,
          'icon'
        ),
        _react2.default.createElement('path', { fill: props.fill, d: 'M40,0A40,40,0,1,0,80,40,40,40,0,0,0,40,0ZM57.41,54.59a2,2,0,1,1-2.83,2.83L40,42.83,25.41,57.41a2,2,0,0,1-2.83-2.83L37.17,40,22.59,25.41a2,2,0,0,1,2.83-2.83L40,37.17,54.59,22.59a2,2,0,0,1,2.83,2.83L42.83,40Z' })
      );
    }
  }]);

  return ErrorLarge;
}(_react2.default.Component);

ErrorLarge.defaultProps = defaultProps;
ErrorLarge.propTypes = propTypes;

exports.default = ErrorLarge;