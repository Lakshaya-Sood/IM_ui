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

var MetroIcon = function (_React$Component) {
  _inherits(MetroIcon, _React$Component);

  function MetroIcon() {
    _classCallCheck(this, MetroIcon);

    return _possibleConstructorReturn(this, (MetroIcon.__proto__ || Object.getPrototypeOf(MetroIcon)).apply(this, arguments));
  }

  _createClass(MetroIcon, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 136 25' },
        _react2.default.createElement('path', { fill: '#FFE500', 'fill-rule': 'evenodd',
          d: 'M18.1333932,25 L23.3476299,9.30188577 L23.3476299,25 L31.1301731,25 L31.1301731,0.00765476126 L20.6240762,0.00765476126 L15.5650866,12.5038274 L10.5065456,0.00765476126 L0,0.00765476126 L0,25 L7.78299198,25 L7.78299198,9.30188577 L13.0358161,25 L18.1333932,25 Z M101.772514,15.2843068 C104.20038,15.0893356 106.621067,13.4309541 106.621067,10.7076602 L106.621067,5.08411232 L106.621067,4.53747231 C106.339289,1.72097044 104.233583,0.200374633 101.737516,0 L81.7169288,0 L81.7173775,25 L89.4994721,25 L89.4994721,15.2843068 L92.597234,15.2843068 L97.6553262,25 L106.605363,25 L100.581688,15.2843068 L101.772514,15.2843068 Z M99.6170027,8.80162461 C99.6170027,9.34241098 99.4828442,9.81700618 98.5154666,9.81700618 L89.4994721,9.81700618 L89.4994721,4.91165505 L98.5271326,4.91165505 C99.6250792,4.91165505 99.6170027,5.63255345 99.6170027,6.08283352 L99.6170027,8.80162461 Z M54.4782517,4.92831541 L54.4782517,0.00765476126 L34.2431905,0.00765476126 L34.2431905,25 L54.7465688,24.9945966 L54.7541966,20.0797896 L42.0454761,20.0797896 L42.0468222,14.7268601 L54.4782517,14.7268601 L54.4782517,9.81925758 L42.0468222,9.81925758 L42.0468222,4.92831541 L54.4782517,4.92831541 Z M64.2063186,4.92831541 L56.8127903,4.92831541 L56.8127903,0.00765476126 L79.3823902,0.00765476126 L79.3823902,4.92831541 L71.9884132,4.92831541 L71.9884132,25 L64.2063186,25 L64.2063186,4.92831541 Z M131.136191,0.00765476126 L114.598342,0.00765476126 C112.113044,0.208929954 110.014516,1.47376668 109.734085,4.30332667 L109.734085,20.4701825 C110.014516,23.2997424 112.113044,24.7987248 114.598342,25 L131.136191,25 C133.621041,24.7987248 135.719568,23.2997424 136,20.4701825 L136,4.30332667 C135.719568,1.47376668 133.621041,0.208929954 131.136191,0.00765476126 L131.136191,0.00765476126 Z M128.217457,18.9626448 C128.181561,19.2436195 128.076119,19.9834297 127.116369,20.0793393 L118.687711,20.0793393 C117.727961,19.9834297 117.552523,19.2436195 117.516628,18.9626448 L117.516628,5.90452261 C117.552075,5.62309757 117.685336,5.02377479 118.645086,4.92831541 L127.119959,4.92831541 C128.080157,5.02377479 128.181561,5.62309757 128.217457,5.90452261 L128.217457,18.9626448 Z' })
      );
    }
  }]);

  return MetroIcon;
}(_react2.default.Component);

exports.default = MetroIcon;