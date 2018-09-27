'use strict';

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

var AllApps = function (_React$Component) {
  _inherits(AllApps, _React$Component);

  function AllApps() {
    _classCallCheck(this, AllApps);

    return _possibleConstructorReturn(this, (AllApps.__proto__ || Object.getPrototypeOf(AllApps)).apply(this, arguments));
  }

  _createClass(AllApps, [{
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
        _react2.default.createElement('path', { fill: props.fill, d: 'M31.71,19.32l-4.2-4.2a9.31,9.31,0,1,0-1.4,1.4l4.2,4.2a1,1,0,0,0,1.4-1.4ZM20.29,16.6A7.31,7.31,0,1,1,27.6,9.29,7.32,7.32,0,0,1,20.29,16.6ZM3,18.83H13.17V29H3Zm6.7-5.65a11.23,11.23,0,0,0,1,2H2a1,1,0,0,1-1-1V2A1,1,0,0,1,2,1H12.65a11.36,11.36,0,0,0-1.73,2H3V13.17Zm2.21,3.65H2a1,1,0,0,0-1,1V30a1,1,0,0,0,1,1H14.17a1,1,0,0,0,1-1V19.34A11.34,11.34,0,0,1,11.91,16.83ZM29,22.21A3,3,0,0,0,31,23v7a1,1,0,0,1-1,1H17.83a1,1,0,0,1-1-1V20a11.2,11.2,0,0,0,2,.44V29H29Z' })
      );
    }
  }]);

  return AllApps;
}(_react2.default.Component);

AllApps.defaultProps = defaultProps;
AllApps.propTypes = propTypes;

// export default AllApps
module.exports = AllApps;