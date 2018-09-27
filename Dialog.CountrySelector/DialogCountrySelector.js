'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _CountryFlag = require('../CountryFlag');

var _CountryFlag2 = _interopRequireDefault(_CountryFlag);

var _List = require('../List.Basic');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var customContentStyle = {
  width: '30%',
  'margin-left': '33.5%'
};

var ModalDialogCountrySelector = function (_React$Component) {
  _inherits(ModalDialogCountrySelector, _React$Component);

  function ModalDialogCountrySelector(props) {
    _classCallCheck(this, ModalDialogCountrySelector);

    var _this = _possibleConstructorReturn(this, (ModalDialogCountrySelector.__proto__ || Object.getPrototypeOf(ModalDialogCountrySelector)).call(this, props));

    _this.state = { open: false };
    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleOpen = _this.handleOpen.bind(_this);
    _this.renderTrigger = _this.renderTrigger.bind(_this);
    _this.handleCountryChange = _this.handleCountryChange.bind(_this);
    return _this;
  }

  _createClass(ModalDialogCountrySelector, [{
    key: 'handleOpen',
    value: function handleOpen() {
      this.setState({ open: true });
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({ open: false });
    }
  }, {
    key: 'handleCountryChange',
    value: function handleCountryChange(event, key) {
      this.props.handleCountrySelect && this.props.handleCountrySelect(key);
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var props = this.props;
      var displayCountries = props.countryList.map(function (option, i) {
        return {
          key: option.countryCode,
          primaryText: _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(_CountryFlag2.default, { countryCode: option.countryCode }),
            ' ',
            option.countryName
          )
        };
      });
      return _react2.default.createElement(_List2.default, {
        className: 'no-borders',
        style: { margin: '1px -24px -24px' },
        listItems: displayCountries,
        defaultSelected: this.props.defaultSelected,
        onChange: this.handleCountryChange,
        disableTouchRipple: true,
        disableFocusRipple: true
      });
    }
  }, {
    key: 'renderTrigger',
    value: function renderTrigger() {
      var props = this.props;
      if (props.trigger) {
        return _react2.default.createElement(
          'span',
          { onTouchTap: this.handleOpen.bind(this) },
          props.trigger()
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;

      return _react2.default.createElement(
        'div',
        { style: { position: 'center' } },
        this.renderTrigger(),
        _react2.default.createElement(
          _Dialog2.default,
          {
            title: props.title || 'Confirmation',
            modal: false,
            open: this.state.open,
            onRequestClose: this.handleClose.bind(this),
            style: customContentStyle,
            autoScrollBodyContent: true
          },
          this.renderContent()
        )
      );
    }
  }]);

  return ModalDialogCountrySelector;
}(_react2.default.Component);

exports.default = ModalDialogCountrySelector;