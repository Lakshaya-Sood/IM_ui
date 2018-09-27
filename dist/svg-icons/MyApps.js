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

var MyAppsIcon = function (_React$Component) {
  _inherits(MyAppsIcon, _React$Component);

  function MyAppsIcon() {
    _classCallCheck(this, MyAppsIcon);

    return _possibleConstructorReturn(this, (MyAppsIcon.__proto__ || Object.getPrototypeOf(MyAppsIcon)).apply(this, arguments));
  }

  _createClass(MyAppsIcon, [{
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
        _react2.default.createElement('path', { fill: props.fill, d: 'M27.34,8.05a4.8,4.8,0,0,0,1.29-3.27,4.7,4.7,0,1,0-9.4,0,4.8,4.8,0,0,0,1.29,3.27,6.3,6.3,0,0,0-4,6.07,1,1,0,0,0,1,1H30.33a1,1,0,0,0,1-1A6.3,6.3,0,0,0,27.34,8.05Zm-3.41-6a2.65,2.65,0,0,1,2.61,2.69,2.61,2.61,0,1,1-5.21,0A2.65,2.65,0,0,1,23.94,2.09Zm-5.24,11c.31-1.44,1.41-3.51,5.24-3.51s4.93,2.07,5.24,3.51ZM14.17,1H2A1,1,0,0,0,1,2V14.17a1,1,0,0,0,1,1H14.17a1,1,0,0,0,1-1V2A1,1,0,0,0,14.17,1Zm-1,12.17H3V3H13.17Zm1,3.65H2a1,1,0,0,0-1,1V30a1,1,0,0,0,1,1H14.17a1,1,0,0,0,1-1V17.83A1,1,0,0,0,14.17,16.83ZM13.17,29H3V18.83H13.17ZM30,16.83H17.83a1,1,0,0,0-1,1V30a1,1,0,0,0,1,1H30a1,1,0,0,0,1-1V17.83A1,1,0,0,0,30,16.83ZM29,29H18.83V18.83H29Z' })
      );
    }
  }]);

  return MyAppsIcon;
}(_react2.default.Component);

MyAppsIcon.defaultProps = defaultProps;
MyAppsIcon.propTypes = propTypes;
exports.default = MyAppsIcon;