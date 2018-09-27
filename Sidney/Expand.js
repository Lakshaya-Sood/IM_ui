'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SidneyOption = require('./SidneyOption');

var _SidneyOption2 = _interopRequireDefault(_SidneyOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var expandIcon = require('./expand.png');
var collapseIcon = require('./collapse.png');

var propTypes = {
  onExpandClick: _propTypes2.default.func
};
var defaultProps = {
  onExpandClick: function onExpandClick() {}
};

var Expand = function (_React$Component) {
  _inherits(Expand, _React$Component);

  function Expand() {
    _classCallCheck(this, Expand);

    return _possibleConstructorReturn(this, (Expand.__proto__ || Object.getPrototypeOf(Expand)).apply(this, arguments));
  }

  _createClass(Expand, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      return _react2.default.createElement(
        'div',
        { title: props.expand ? 'Collapse' : 'Expand' },
        _react2.default.createElement(_SidneyOption2.default, {
          expand: props.expand,
          label: 'Collapse',
          onClick: props.onExpandClick,
          icon: props.expand ? _react2.default.createElement('img', { src: collapseIcon, height: '28', width: '28' }) : _react2.default.createElement('img', { src: expandIcon, height: '28', width: '28' }) })
      );
    }
  }]);

  return Expand;
}(_react2.default.Component);

Expand.propTypes = propTypes;
Expand.defaultProps = defaultProps;

exports.default = Expand;