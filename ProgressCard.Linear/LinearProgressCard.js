'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _LinearProgress = require('./LinearProgress');

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

var _Missie = require('../Missie');

var _Missie2 = _interopRequireDefault(_Missie);

var _Spinner = require('../Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Card2 = require('../Card.Footer');

var _Card3 = _interopRequireDefault(_Card2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function renderBody(bodyDef) {
  var body = [];
  _lodash2.default.forEach(bodyDef, function (item) {
    body.push(_react2.default.createElement(
      _Card.CardText,
      null,
      _react2.default.createElement(_LinearProgress2.default, { subtitle: item.subtitle, value: item.value, title: item.title, color: item.fuiStyle })
    ));
  });
  return body;
}

function renderHelpText(helpText) {
  if (!helpText) return false;
  return _react2.default.createElement(
    _Card.CardText,
    { className: 'text-muted' },
    helpText || false
  );
}

var LinearProgressCard = function (_React$Component) {
  _inherits(LinearProgressCard, _React$Component);

  function LinearProgressCard() {
    _classCallCheck(this, LinearProgressCard);

    return _possibleConstructorReturn(this, (LinearProgressCard.__proto__ || Object.getPrototypeOf(LinearProgressCard)).apply(this, arguments));
  }

  _createClass(LinearProgressCard, [{
    key: 'renderContent',
    value: function renderContent() {
      var options = this.props.cardOptions;
      if (options.error && options.error.hasError) {
        return _react2.default.createElement(_Missie2.default, { messageText: options.error.message });
      }
      if (_lodash2.default.isEmpty(options.bodyDef)) {
        return _react2.default.createElement(_Spinner2.default, null);
      }
      return renderBody(options.bodyDef);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var options = props.cardOptions;

      return _react2.default.createElement(
        _Card.Card,
        { className: 'mdg-card-margin-bottom' },
        _react2.default.createElement(_Card.CardTitle, { titleColor: '#666',
          className: 'font-thin text-base', title: options.title, subtitle: options.subtitle || false }),
        this.renderContent.call(this),
        renderHelpText(options.helpText),
        _react2.default.createElement(_Card3.default, { footerDef: options.footerDef })
      );
    }
  }]);

  return LinearProgressCard;
}(_react2.default.Component);

exports.default = LinearProgressCard;