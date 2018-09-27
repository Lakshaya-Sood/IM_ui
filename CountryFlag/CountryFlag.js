'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  countryCode: _propTypes2.default.string,
  title: _propTypes2.default.string
};

function _getFlagImage(countryCode) {
  if (!countryCode) return null;
  return _react2.default.createElement('img', { src: require('./' + countryCode + '.png'), style: { width: '30px', height: '20px' } });
}

var CountryFlag = function (_React$Component) {
  _inherits(CountryFlag, _React$Component);

  function CountryFlag(props) {
    _classCallCheck(this, CountryFlag);

    var _this = _possibleConstructorReturn(this, (CountryFlag.__proto__ || Object.getPrototypeOf(CountryFlag)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(CountryFlag, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.handleClick && this.props.handleClick();
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;

      return _react2.default.createElement(
        'div',
        { style: { display: 'inline-block' },
          onClick: this.handleClick, className: this.props.handleClick && 'clickable' },
        _react2.default.createElement(
          'div',
          { style: { display: 'inline-block' } },
          _react2.default.createElement(
            'span',
            null,
            _getFlagImage(props.countryCode),
            '\xA0'
          )
        ),
        props.title && _react2.default.createElement(
          'div',
          { style: { display: 'inline-block' } },
          props.title
        )
      );
    }
  }]);

  return CountryFlag;
}(_react2.default.Component);

CountryFlag.propTypes = propTypes;

exports.default = CountryFlag;