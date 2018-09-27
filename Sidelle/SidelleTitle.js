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

var _Close = require('../svg-icons/Close');

var _Close2 = _interopRequireDefault(_Close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  title: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};
var defaultProps = {
  title: '',
  onClick: function onClick() {}
};

var SidelleTitle = function (_React$Component) {
  _inherits(SidelleTitle, _React$Component);

  function SidelleTitle() {
    _classCallCheck(this, SidelleTitle);

    return _possibleConstructorReturn(this, (SidelleTitle.__proto__ || Object.getPrototypeOf(SidelleTitle)).apply(this, arguments));
  }

  _createClass(SidelleTitle, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      if (!props.title) return null;

      return _react2.default.createElement(
        'div',
        { style: { padding: '22px 22px', borderBottom: '1px solid #F2F3F4' } },
        _react2.default.createElement(
          'span',
          { style: { fontSize: '20px', lineHeight: '26px', color: '#002B72' } },
          props.title
        ),
        _react2.default.createElement(
          'div',
          { style: {
              display: 'block',
              position: 'absolute',
              top: '10px',
              right: '20px' } },
          _react2.default.createElement(
            _IconButton2.default,
            {
              onClick: props.onClick,
              iconStyle: { height: '28px', width: '28px', margin: '0 auto' } },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_Close2.default, { fill: '#002B74' })
            )
          )
        )
      );
    }
  }]);

  return SidelleTitle;
}(_react2.default.Component);

SidelleTitle.propTypes = propTypes;
SidelleTitle.defaultProps = defaultProps;

exports.default = SidelleTitle;