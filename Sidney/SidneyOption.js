'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  expand: _propTypes2.default.bool,
  selected: _propTypes2.default.bool
};
var defaultProps = {
  expand: false,
  selected: false
};

var SidneyOption = function (_React$Component) {
  _inherits(SidneyOption, _React$Component);

  function SidneyOption() {
    _classCallCheck(this, SidneyOption);

    return _possibleConstructorReturn(this, (SidneyOption.__proto__ || Object.getPrototypeOf(SidneyOption)).apply(this, arguments));
  }

  _createClass(SidneyOption, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      var style = {
        height: '64px',
        width: '100%',
        minWidth: '80px',
        paddingLeft: '26px',
        lineHeight: 0,
        background: 'transparent',
        textAlign: 'left'
      };

      var labelStyle = {
        color: '#fff',
        textTransform: 'none',
        fontSize: '16px',
        opacity: 0
      };

      props.selected && (style.background = 'rgba(0,0,0, .5)');
      props.expand && (style.paddingLeft = '32px');
      props.expand && (labelStyle.opacity = 1);
      props.expand && (labelStyle.transition = 'opacity 450ms ease-in');

      return _react2.default.createElement(_FlatButton2.default, {
        backgroundColor: style.background,
        hoverColor: style.background,
        disableTouchRipple: true,
        onClick: props.onClick,
        style: style,
        labelStyle: labelStyle,
        label: props.label,
        icon: _react2.default.createElement(
          'span',
          { style: { width: '28px', height: '28px', display: 'inline-block', marginLeft: 0 } },
          props.icon
        )
      });
    }
  }]);

  return SidneyOption;
}(_react2.default.Component);

SidneyOption.propTypes = propTypes;
SidneyOption.defaultProps = defaultProps;

exports.default = SidneyOption;