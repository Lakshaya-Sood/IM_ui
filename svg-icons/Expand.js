'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserIcon = function (_React$Component) {
  _inherits(UserIcon, _React$Component);

  function UserIcon() {
    _classCallCheck(this, UserIcon);

    return _possibleConstructorReturn(this, (UserIcon.__proto__ || Object.getPrototypeOf(UserIcon)).apply(this, arguments));
  }

  _createClass(UserIcon, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { width: '32px', height: '32px', viewBox: '0 0 32 32', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        _react2.default.createElement(
          'title',
          null,
          'icons / expand'
        ),
        _react2.default.createElement(
          'desc',
          null,
          'Created with Sketch.'
        ),
        _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement('path', { d: 'M12.7927,17.793 C13.1837,17.402 13.8157,17.402 14.2067,17.793 C14.5977,18.184 14.5977,18.816 14.2067,19.207 L7.4137,26 L11.4997,26 C12.0527,26 12.4997,26.448 12.4997,27 C12.4997,27.552 12.0527,28 11.4997,28 L4.9997,28 C4.8697,28 4.7397,27.974 4.6177,27.923 C4.3737,27.821 4.1787,27.626 4.0767,27.382 C4.0267,27.26 3.9997,27.13 3.9997,27 L3.9997,20.5 C3.9997,19.948 4.4467,19.5 4.9997,19.5 C5.5527,19.5 5.9997,19.948 5.9997,20.5 L5.9997,24.586 L12.7927,17.793 Z M27.9997,5 L27.9997,11.5 C27.9997,12.052 27.5527,12.5 26.9997,12.5 C26.4467,12.5 25.9997,12.052 25.9997,11.5 L25.9997,7.414 L19.2067,14.207 C19.0117,14.402 18.7557,14.5 18.4997,14.5 C18.2437,14.5 17.9877,14.402 17.7927,14.207 C17.4017,13.816 17.4017,13.184 17.7927,12.793 L24.5857,6 L20.4997,6 C19.9467,6 19.4997,5.552 19.4997,5 C19.4997,4.448 19.9467,4 20.4997,4 L26.9997,4 C27.1307,4 27.2597,4.026 27.3827,4.077 C27.6267,4.179 27.8217,4.374 27.9227,4.618 C27.9737,4.74 27.9997,4.87 27.9997,5 Z', id: 'path-1' })
        ),
        _react2.default.createElement(
          'g',
          { id: 'Icons', stroke: 'none', 'stroke-width': '1', fill: 'none', 'fill-rule': 'evenodd' },
          _react2.default.createElement(
            'g',
            { id: 'icons-/-expand' },
            _react2.default.createElement('rect', { id: 'fill', x: '0', y: '0', width: '32', height: '32' }),
            _react2.default.createElement(
              'mask',
              { id: 'mask-2', fill: 'white' },
              _react2.default.createElement('use', null)
            ),
            _react2.default.createElement('use', { id: 'shape', fill: '#020303' }),
            _react2.default.createElement(
              'g',
              { id: 'colors-/-grey', mask: 'url(#mask-2)', fill: '#08132C' },
              _react2.default.createElement('rect', { id: 'grey', x: '0', y: '0', width: '32', height: '32' })
            )
          )
        )
      );
    }
  }]);

  return UserIcon;
}(_react2.default.Component);

exports.default = UserIcon;