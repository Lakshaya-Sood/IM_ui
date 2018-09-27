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

var CheckSmallFilled = function (_React$Component) {
  _inherits(CheckSmallFilled, _React$Component);

  function CheckSmallFilled() {
    _classCallCheck(this, CheckSmallFilled);

    return _possibleConstructorReturn(this, (CheckSmallFilled.__proto__ || Object.getPrototypeOf(CheckSmallFilled)).apply(this, arguments));
  }

  _createClass(CheckSmallFilled, [{
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
        _react2.default.createElement('path', { fill: props.fill, d: 'M27.25,4.5A15.54,15.54,0,0,0,16,0,16.29,16.29,0,0,0,4.63,4.88,15.73,15.73,0,0,0,0,16.28,15.7,15.7,0,0,0,15.73,32H16A16.15,16.15,0,0,0,32,15.72h0A16.06,16.06,0,0,0,27.25,4.5ZM16,30A13.73,13.73,0,0,1,2,16.24a13.74,13.74,0,0,1,4-10A14.3,14.3,0,0,1,16,2h.25a13.52,13.52,0,0,1,9.58,3.92A14.09,14.09,0,0,1,16,30ZM15,18V8.5a1,1,0,0,1,2,0V18a1,1,0,0,1-2,0Zm2.68,4.77A1.68,1.68,0,1,1,16,21.13,1.68,1.68,0,0,1,17.68,22.81Z' })
      );
    }
  }]);

  return CheckSmallFilled;
}(_react2.default.Component);

CheckSmallFilled.defaultProps = defaultProps;
CheckSmallFilled.propTypes = propTypes;

exports.default = CheckSmallFilled;