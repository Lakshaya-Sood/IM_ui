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

var Edit = function (_React$Component) {
  _inherits(Edit, _React$Component);

  function Edit() {
    _classCallCheck(this, Edit);

    return _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).apply(this, arguments));
  }

  _createClass(Edit, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      return _react2.default.createElement(
        'svg',
        { fill: props.fill, id: 'Ebene_1', 'data-name': 'Ebene 1', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' },
        _react2.default.createElement(
          'title',
          null,
          'icon'
        ),
        _react2.default.createElement('path', { d: 'M31,30H9.64l.15,0a1,1,0,0,0,.48-.27l.33-.33h0L28.09,11.88h0v0L30,10h0v0L30.93,9a3.66,3.66,0,0,0,0-5.16L28.12,1.07a3.65,3.65,0,0,0-5.16,0L22,2h0L20.15,3.88h0L2.64,21.39h0l-.33.33a1,1,0,0,0-.27.48L0,30.77A1,1,0,0,0,0,31s0,0,0,0H0a1,1,0,0,0,.07.34l0,.08a1,1,0,0,0,.19.28A1,1,0,0,0,1,32H31a1,1,0,0,0,0-2ZM3.7,23.88,8.12,28.3,2.34,29.66ZM20.86,6,26,11.16,9.9,27.24,4.76,22.1Zm1.87-1.88,5.14,5.14-.47.47L22.27,4.59Zm4-1.64,2.81,2.81a1.65,1.65,0,0,1,0,2.33l-.23.23L24.15,2.71l.23-.23A1.65,1.65,0,0,1,26.71,2.48Z' })
      );
    }
  }]);

  return Edit;
}(_react2.default.Component);

Edit.defaultProps = defaultProps;
Edit.propTypes = propTypes;

exports.default = Edit;