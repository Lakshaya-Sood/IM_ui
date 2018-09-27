'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _Stylist = require('../zutils/Stylist');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// todo: allow children render

var propTypes = {
  fuiStyle: _react.PropTypes.string,
  subtitle: _react2.default.PropTypes.string,
  value: _react2.default.PropTypes.string
};

var defaultProps = {
  fuiStyle: 'primary',
  subtitle: '',
  value: 0
};

var Tile = function (_React$Component) {
  _inherits(Tile, _React$Component);

  function Tile() {
    _classCallCheck(this, Tile);

    return _possibleConstructorReturn(this, (Tile.__proto__ || Object.getPrototypeOf(Tile)).apply(this, arguments));
  }

  _createClass(Tile, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var style = (0, _Stylist.getTileStyle)(props.fuiStyle);

      return _react2.default.createElement(
        _Card.Card,
        { className: style },
        _react2.default.createElement(
          _Card.CardText,
          null,
          _react2.default.createElement(
            'div',
            { className: 'title' },
            _react2.default.createElement(
              'h1',
              { className: 'm-t-0 font-light' },
              ' ',
              props.value
            ),
            ' '
          ),
          _react2.default.createElement(
            'div',
            { className: 'card-text' },
            props.subtitle
          )
        )
      );
    }
  }]);

  return Tile;
}(_react2.default.Component);

Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;
exports.default = Tile;