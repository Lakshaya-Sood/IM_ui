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

var _NoData = require('../NoData');

var _NoData2 = _interopRequireDefault(_NoData);

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

var BasicCard = function (_React$Component) {
  _inherits(BasicCard, _React$Component);

  function BasicCard(props) {
    _classCallCheck(this, BasicCard);

    var _this = _possibleConstructorReturn(this, (BasicCard.__proto__ || Object.getPrototypeOf(BasicCard)).call(this, props));

    _this.state = {};
    _this.renderContent = _this.renderContent.bind(_this);
    return _this;
  }

  _createClass(BasicCard, [{
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
      if (!options.bodyDef) {
        return _react2.default.createElement(_NoData2.default, null);
      }
      if (_lodash2.default.isEmpty(options.bodyDef)) {
        return _react2.default.createElement(_Spinner2.default, null);
      }
      return _react2.default.createElement(
        _Card.CardText,
        null,
        this.props.children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      return _react2.default.createElement(
        _Card.Card,
        { className: 'm-b-75', style: props.style },
        _react2.default.createElement(_Card.CardTitle, { titleColor: '#666', titleStyle: { fontSize: '18px', lineHeight: '24px' },
          className: 'font-thin text-base', title: props.title, subtitle: props.subtitle || '' }),
        this.renderContent(),
        renderHelpText(props.cardOptions.helpText),
        _react2.default.createElement(_Card3.default, { footerDef: props.cardOptions.footerDef })
      );
    }
  }]);

  return BasicCard;
}(_react2.default.Component);

exports.default = BasicCard;