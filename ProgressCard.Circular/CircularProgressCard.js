'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _Missie = require('../Missie');

var _Missie2 = _interopRequireDefault(_Missie);

var _Spinner = require('../Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Card2 = require('../Card.Footer');

var _Card3 = _interopRequireDefault(_Card2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _CircularProgress = require('material-ui/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function renderHelpText(helpText) {
  if (!helpText) return false;
  return _react2.default.createElement(
    _Card.CardText,
    { className: 'text-muted' },
    helpText || false
  );
}

var CircularProgressCard = function (_React$Component) {
  _inherits(CircularProgressCard, _React$Component);

  function CircularProgressCard(props) {
    _classCallCheck(this, CircularProgressCard);

    var _this = _possibleConstructorReturn(this, (CircularProgressCard.__proto__ || Object.getPrototypeOf(CircularProgressCard)).call(this, props));

    _this.state = {};
    _this.renderContent = _this.renderContent.bind(_this);
    return _this;
  }

  _createClass(CircularProgressCard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var options = this.props.cardOptions;
      if (options.error && options.error.hasError) {
        return _react2.default.createElement(_Missie2.default, null);
      }
      if (_lodash2.default.isEmpty(options.bodyDef)) {
        return _react2.default.createElement(_Spinner2.default, null);
      }
      return _react2.default.createElement(Circle, { value: options.bodyDef.value, success: true, title: 'Country Progress' });
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      return _react2.default.createElement(
        _Card.Card,
        { className: 'm-b-75' },
        _react2.default.createElement(_Card.CardTitle, { titleColor: '#666',
          className: 'font-thin text-base', title: props.title, subtitle: props.subtitle || '' }),
        _react2.default.createElement(
          _Card.CardText,
          null,
          this.renderContent()
        ),
        renderHelpText(props.cardOptions.helpText),
        _react2.default.createElement(_Card3.default, { footerDef: props.cardOptions.footerDef })
      );
    }
  }]);

  return CircularProgressCard;
}(_react2.default.Component);

var Circle = function (_React$Component2) {
  _inherits(Circle, _React$Component2);

  function Circle() {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).apply(this, arguments));
  }

  _createClass(Circle, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      var color = null;
      props.success && (color = '#36a372');
      props.danger && (color = '#dd4343');
      props.warning && (color = '#fd9c35');

      return _react2.default.createElement(
        'div',
        { className: 'text-center' },
        _react2.default.createElement(_CircularProgress2.default, { color: color, mode: 'determinate', value: props.value, size: 80, thickness: 7 }),
        _react2.default.createElement(
          'div',
          { className: ' text-muted text-center' },
          props.title,
          _react2.default.createElement(
            'span',
            { style: { color: color } },
            ' ',
            props.value,
            '%'
          )
        )
      );
    }
  }]);

  return Circle;
}(_react2.default.Component);

// CircularProgressCard.propTypes = propTypes;
// CircularProgressCard.defaultProps = defaultProps;

exports.default = CircularProgressCard;