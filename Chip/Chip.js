'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Chip = require('material-ui/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  chip: {
    margin: 4,
    borderRadius: 2,
    height: '40px'
  },
  labelStyle: {
    color: '#002d72',
    fontSize: '16px',
    lineHeight: '36px'
  },
  deleteIconStyle: {
    margin: '8px 4px 0px -8px'
  }
};

var propTypes = {
  onRequestDelete: _propTypes2.default.func,
  fuiStyle: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  key: _propTypes2.default.string,
  backgroundColor: _propTypes2.default.backgroundColor
};

var defaultProps = {
  onRequestDelete: null,
  fuiStyle: 'secondary',
  onClick: function onClick() {},
  backgroundColor: '#e6f0ff'
};

var Chip = function (_React$Component) {
  _inherits(Chip, _React$Component);

  function Chip() {
    _classCallCheck(this, Chip);

    return _possibleConstructorReturn(this, (Chip.__proto__ || Object.getPrototypeOf(Chip)).apply(this, arguments));
  }

  _createClass(Chip, [{
    key: 'render',
    value: function render() {
      var fuiStyle = this.props.fuiStyle;

      var labelStyle = styles.labelStyle;
      var deleteIconStyle = styles.deleteIconStyle;
      var bg = this.props.backgroundColor;

      // change bg based on style
      if (fuiStyle === 'primary') {
        bg = '#0050cb', labelStyle = Object.assign({}, labelStyle, { color: '#fff' });
        deleteIconStyle = Object.assign({}, { fill: '#fff', color: '#fff' }, deleteIconStyle);
      }

      return _react2.default.createElement(
        _Chip2.default,
        {
          backgroundColor: bg,
          key: this.props.key,
          onRequestDelete: this.props.onRequestDelete,
          onClick: this.props.onClick,
          style: styles.chip,
          labelStyle: labelStyle,
          deleteIconStyle: deleteIconStyle },
        this.props.children
      );
    }
  }]);

  return Chip;
}(_react2.default.Component);

Chip.defaultProps = defaultProps;
Chip.propTypes = propTypes;

exports.default = Chip;