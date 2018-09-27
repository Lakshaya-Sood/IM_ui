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

var Upload = function (_React$Component) {
  _inherits(Upload, _React$Component);

  function Upload() {
    _classCallCheck(this, Upload);

    return _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).apply(this, arguments));
  }

  _createClass(Upload, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      return _react2.default.createElement(
        'svg',
        { version: '1.1', id: 'Layer_1', x: '0px', y: '0px',
          viewBox: '0 0 24 24', 'enable-background': 'new 0 0 24 24' },
        _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement('polyline', { fill: 'none', stroke: props.fill, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-miterlimit': '10', points: '20,17 17.5,14.5 15,17 ' }),
          _react2.default.createElement('circle', { fill: 'none', stroke: props.fill, 'stroke-linejoin': 'round', 'stroke-miterlimit': '10', cx: '17.5', cy: '17.5', r: '6' }),
          _react2.default.createElement('line', { fill: 'none', stroke: props.fill, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-miterlimit': '10', x1: '17.5', y1: '20.5', x2: '17.5', y2: '14.5' })
        ),
        _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement('polyline', { fill: 'none', stroke: props.fill, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-miterlimit': '10', points: '10.5,21.5 0.5,21.5 0.5,0.5 11.5,0.5 16.5,5.5 16.5,9.5 ' }),
          _react2.default.createElement('polyline', { fill: 'none', stroke: props.fill, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-miterlimit': '10', points: '11.5,0.5 11.5,5.5 16.5,5.5 ' })
        ),
        _react2.default.createElement(
          'g',
          { id: 'Invisible_Shape' },
          _react2.default.createElement('rect', { fill: 'none', width: '24', height: '24' })
        )
      );
    }
  }]);

  return Upload;
}(_react2.default.Component);

Upload.defaultProps = defaultProps;
Upload.propTypes = propTypes;

exports.default = Upload;