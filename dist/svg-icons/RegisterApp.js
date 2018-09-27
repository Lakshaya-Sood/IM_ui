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
  fill: '#ffffff'
};

var RegisterAppIcon = function (_React$Component) {
  _inherits(RegisterAppIcon, _React$Component);

  function RegisterAppIcon() {
    _classCallCheck(this, RegisterAppIcon);

    return _possibleConstructorReturn(this, (RegisterAppIcon.__proto__ || Object.getPrototypeOf(RegisterAppIcon)).apply(this, arguments));
  }

  _createClass(RegisterAppIcon, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      return _react2.default.createElement(
        'svg',
        { id: 'Ebene_1', 'data-name': 'Ebene 1', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' },
        _react2.default.createElement('defs', null),
        _react2.default.createElement(
          'title',
          null,
          'icon'
        ),
        _react2.default.createElement('path', { fill: props.fill,
          d: 'M15.17,30V17.83a1,1,0,0,0-1-1H2a1,1,0,0,0-1,1V30a1,1,0,0,0,1,1H14.17A1,1,0,0,0,15.17,30Zm-2-1H3V18.83H13.17Zm2-14.83V2a1,1,0,0,0-1-1H2A1,1,0,0,0,1,2V14.17a1,1,0,0,0,1,1H14.17A1,1,0,0,0,15.17,14.17Zm-2-1H3V3H13.17Zm17.83,1V2a1,1,0,0,0-1-1H17.83a1,1,0,0,0-1,1V14.17a1,1,0,0,0,1,1H30A1,1,0,0,0,31,14.17Zm-2-1H18.83V3H29ZM31,24a.92.92,0,0,1-.92.92H24.92v5.17a.92.92,0,1,1-1.83,0V24.92H17.92a.92.92,0,1,1,0-1.83h5.17V17.92a.92.92,0,1,1,1.83,0v5.17h5.17A.92.92,0,0,1,31,24Z' })
      );
    }
  }]);

  return RegisterAppIcon;
}(_react2.default.Component);

RegisterAppIcon.defaultProps = defaultProps;
RegisterAppIcon.propTypes = propTypes;

exports.default = RegisterAppIcon;