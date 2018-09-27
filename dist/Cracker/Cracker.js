'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _verifiedUser = require('material-ui/svg-icons/action/verified-user');

var _verifiedUser2 = _interopRequireDefault(_verifiedUser);

var _Stylist = require('../zutils/Stylist');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// todo take icon from caller

var propTypes = {
  fuiStyle: _react.PropTypes.string,
  value: _react2.default.PropTypes.number,
  title: _react2.default.PropTypes.string,
  subTitle: _react2.default.PropTypes.string
};

var defaultProps = {
  fuiStyle: 'primary',
  value: 0,
  title: '',
  subTitle: ''
};

var Cracker = function (_React$Component) {
  _inherits(Cracker, _React$Component);

  function Cracker() {
    _classCallCheck(this, Cracker);

    return _possibleConstructorReturn(this, (Cracker.__proto__ || Object.getPrototypeOf(Cracker)).apply(this, arguments));
  }

  _createClass(Cracker, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var style = (0, _Stylist.getCrackerStyle)(props.fuiStyle);

      return _react2.default.createElement(
        _Card.Card,
        { className: style },
        _react2.default.createElement(
          _Card.CardText,
          null,
          _react2.default.createElement(_verifiedUser2.default, { className: 'text-white-base', style: { height: '60px', width: '60px' } }),
          _react2.default.createElement(
            'h1',
            { className: 'text-white-base font-light' },
            props.value
          ),
          _react2.default.createElement(
            'h3',
            { className: 'font-thin text-white-base no-margins' },
            props.title
          ),
          _react2.default.createElement(
            'span',
            { className: 'text-white-base' },
            props.subTitle
          )
        )
      );
    }
  }]);

  return Cracker;
}(_react2.default.Component);

Cracker.propTypes = propTypes;
Cracker.defaultProps = defaultProps;

exports.default = Cracker;