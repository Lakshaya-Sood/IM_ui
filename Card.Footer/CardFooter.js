'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Stylist = require('../zutils/Stylist');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {};

var defaultProps = {};

function renderFooter(footerDefs) {
  var footer = [];

  if (!footerDefs || _lodash2.default.isEmpty(footerDefs)) return false;

  _lodash2.default.forEach(footerDefs, function (item) {
    var itemStyle = (0, _Stylist.getCardFooterItemStyle)(item.fuiStyle);
    footer.push(_react2.default.createElement(
      'div',
      { className: 'text-group-item' },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          { className: itemStyle },
          item.value
        ),
        ' '
      ),
      _react2.default.createElement(
        'div',
        { className: 'text-muted' },
        item.title
      )
    ));
  });

  return _react2.default.createElement(
    'div',
    { className: 'text-group' },
    footer
  );
}

var CardFooter = function (_React$Component) {
  _inherits(CardFooter, _React$Component);

  function CardFooter() {
    _classCallCheck(this, CardFooter);

    return _possibleConstructorReturn(this, (CardFooter.__proto__ || Object.getPrototypeOf(CardFooter)).apply(this, arguments));
  }

  _createClass(CardFooter, [{
    key: 'renderContent',
    value: function renderContent() {
      var props = this.props;
      if (props.children) {
        return props.children;
      }
      return renderFooter(props.footerDef);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;

      if (!props.footerDef || _lodash2.default.isEmpty(props.footerDef)) {
        return null;
      }

      return _react2.default.createElement(
        _Card.CardText,
        { className: 'text-center card-footer' },
        this.renderContent.call(this)
      );
    }
  }]);

  return CardFooter;
}(_react2.default.Component);

CardFooter.propTypes = propTypes;
CardFooter.defaultProps = defaultProps;

exports.default = CardFooter;