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

var MetroUnitedInverted = function (_React$Component) {
  _inherits(MetroUnitedInverted, _React$Component);

  function MetroUnitedInverted() {
    _classCallCheck(this, MetroUnitedInverted);

    return _possibleConstructorReturn(this, (MetroUnitedInverted.__proto__ || Object.getPrototypeOf(MetroUnitedInverted)).apply(this, arguments));
  }

  _createClass(MetroUnitedInverted, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { id: 'metro-united', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1200 203' },
        _react2.default.createElement(
          'title',
          null,
          'metro-united'
        ),
        _react2.default.createElement('path', { id: 'path', fill: '#f7a800', d: 'M206.11,81.19a2.52,2.52,0,0,1,1.28,2.2v113.5a2.42,2.42,0,0,1-2.42,2.42H156a2.41,2.41,0,0,1-2.41-2.42V113.38c0-2.07.56-2.74,1.75-3.42l48.22-28.75a2.51,2.51,0,0,1,2.52,0' }),
        _react2.default.createElement('path', { id: 'path-2', 'data-name': 'path', fill: '#fff', d: 'M998.09,90.33C998.09,70,1021,0,1099,0s101,70,101,90.33a2.51,2.51,0,0,1-2.52,2.52H1150a2.53,2.53,0,0,1-2.46-2,49.64,49.64,0,0,0-96.9,0,2.52,2.52,0,0,1-2.45,2h-47.53A2.51,2.51,0,0,1,998.09,90.33Zm199.39,19.82H1150a2.53,2.53,0,0,0-2.46,2,49.64,49.64,0,0,1-96.9,0,2.52,2.52,0,0,0-2.45-2h-47.53a2.51,2.51,0,0,0-2.52,2.52C998.09,133,1021,203,1099,203s101-70,101-90.34A2.51,2.51,0,0,0,1197.48,110.15ZM631.58,68.49H582.65a2.42,2.42,0,0,0-2.42,2.42v126a2.42,2.42,0,0,0,2.42,2.42h48.93a2.42,2.42,0,0,0,2.42-2.42v-126A2.42,2.42,0,0,0,631.58,68.49ZM692.31,3.7H521.92a2.42,2.42,0,0,0-2.42,2.42V48.79a2.42,2.42,0,0,0,2.42,2.42H692.31a2.43,2.43,0,0,0,2.42-2.42V6.13A2.43,2.43,0,0,0,692.31,3.7ZM365.21,80.14a2.41,2.41,0,0,0-2.41,2.42v37.88a2.41,2.41,0,0,0,2.41,2.42h71.55a2.42,2.42,0,0,0,2.42-2.42V82.56a2.42,2.42,0,0,0-2.42-2.42Zm82.74,71.65H345.84V51.22H446.56A2.42,2.42,0,0,0,449,48.79V6.13a2.42,2.42,0,0,0-2.42-2.42H294.46A2.42,2.42,0,0,0,292,6.13V196.89a2.42,2.42,0,0,0,2.41,2.42H447.95a2.42,2.42,0,0,0,2.42-2.42V154.22A2.42,2.42,0,0,0,447.95,151.8ZM206.1,2a2.52,2.52,0,0,0-2.54,0L103.7,63,3.82,2.07A2.51,2.51,0,0,0,0,4.23V196.89a2.42,2.42,0,0,0,2.42,2.42H51.36a2.42,2.42,0,0,0,2.42-2.42V90.94l47.49,28.59a5.57,5.57,0,0,0,2.43.88,5.59,5.59,0,0,0,2.42-.88l100-59.94c1.07-.63,1.24-1.32,1.24-3,0-.74,0-52.38,0-52.38A2.52,2.52,0,0,0,206.1,2ZM811.48,3.7H762.54a2.42,2.42,0,0,0-2.41,2.42V196.89a2.42,2.42,0,0,0,2.41,2.42h48.94a2.42,2.42,0,0,0,2.41-2.42V6.13A2.42,2.42,0,0,0,811.48,3.7Zm121.43,66c0-66-63.21-66-89.42-66h-9.94a2.42,2.42,0,0,0-2.41,2.42V48.79a2.42,2.42,0,0,0,2.41,2.42h15.75c7.44,0,29.27,1.28,29.27,23.46s-22.74,23.49-29,23.49h-16a2.42,2.42,0,0,0-2.41,2.42V137.9a5.68,5.68,0,0,0,1.08,3.77l38,56.52a2.51,2.51,0,0,0,2.09,1.11h56.33a2.52,2.52,0,0,0,2.07-3.95l-43.56-63.81S932.91,118.41,932.91,69.74Z' })
      );
    }
  }]);

  return MetroUnitedInverted;
}(_react2.default.Component);

exports.default = MetroUnitedInverted;