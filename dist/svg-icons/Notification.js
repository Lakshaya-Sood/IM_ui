'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  fill: _propTypes2.default.string
};

var defaultProps = {
  fill: '#fff'
};

var Notification = function (_Component) {
  _inherits(Notification, _Component);

  function Notification() {
    _classCallCheck(this, Notification);

    return _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).apply(this, arguments));
  }

  _createClass(Notification, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      return _react2.default.createElement(
        'svg',
        { id: 'Ebene_1', 'data-name': 'Ebene 1', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' },
        _react2.default.createElement(
          'title',
          null,
          'icon'
        ),
        _react2.default.createElement('path', { fill: props.fill, d: 'M31,26a2.94,2.94,0,0,1-2.91-3V15.84A12.26,12.26,0,0,0,20.73,4.62,4.88,4.88,0,0,0,16,1a5,5,0,0,0-4.73,3.62A12.26,12.26,0,0,0,3.91,15.84v7.25A2.94,2.94,0,0,1,1,26a1,1,0,1,0,0,2H11.19a4.9,4.9,0,0,0,9.62,0H31a1,1,0,0,0,0-2ZM16,30a2.91,2.91,0,0,1-2.73-2h5.46A2.91,2.91,0,0,1,16,30ZM4.94,26a5,5,0,0,0,1-3V15.84a10.24,10.24,0,0,1,6.57-9.56,1,1,0,0,0,.64-.79A2.94,2.94,0,0,1,16,3a2.9,2.9,0,0,1,2.87,2.5,1,1,0,0,0,.64.79,10.24,10.24,0,0,1,6.58,9.56v7.25a5,5,0,0,0,1,3Z' })
      );
    }
  }]);

  return Notification;
}(_react.Component);

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;

exports.default = Notification;