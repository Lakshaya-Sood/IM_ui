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

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
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
        _react2.default.createElement('path', { fill: props.fill, d: 'M28,10H4A1,1,0,0,1,4,8H28a1,1,0,0,1,0,2Zm1,6a1,1,0,0,0-1-1H4a1,1,0,0,0,0,2H28A1,1,0,0,0,29,16Zm0,7a1,1,0,0,0-1-1H4a1,1,0,0,0,0,2H28A1,1,0,0,0,29,23Z' })
      );
    }
  }]);

  return Menu;
}(_react.Component);

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

exports.default = Menu;