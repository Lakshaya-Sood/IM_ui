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

var CockpitIcon = function (_React$Component) {
  _inherits(CockpitIcon, _React$Component);

  function CockpitIcon() {
    _classCallCheck(this, CockpitIcon);

    return _possibleConstructorReturn(this, (CockpitIcon.__proto__ || Object.getPrototypeOf(CockpitIcon)).apply(this, arguments));
  }

  _createClass(CockpitIcon, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { viewBox: '0 0 80 80', version: '1.1' },
        _react2.default.createElement(
          'title',
          null,
          'Cockpit_Icon_2'
        ),
        _react2.default.createElement(
          'desc',
          null,
          'Created with Sketch.'
        ),
        _react2.default.createElement('defs', null),
        _react2.default.createElement(
          'g',
          { id: 'Page-1', stroke: 'none', 'stroke-width': '1', fill: 'none', 'fill-rule': 'evenodd' },
          _react2.default.createElement(
            'g',
            { id: 'Cockpit_Icon_2' },
            _react2.default.createElement(
              'g',
              { id: 'window-application-search', transform: 'translate(4.000000, 4.000000)' },
              _react2.default.createElement(
                'g',
                { id: 'Outline_Icons', 'fill-rule': 'nonzero', fill: '#0064fe' },
                _react2.default.createElement(
                  'g',
                  { id: 'Group' },
                  _react2.default.createElement('path', { d: 'M63,60.879 C64.848,58.569 66,55.683 66,52.5 C66,45.057 59.943,39 52.503,39 C45.06,39 39,45.057 39,52.5 C39,59.943 45.06,66 52.503,66 C55.683,66 58.569,64.848 60.879,63 L69.441,71.562 C69.732,71.853 70.116,72 70.5,72 C70.884,72 71.268,71.853 71.562,71.562 C72.147,70.977 72.147,70.026 71.562,69.441 L63,60.879 Z M42,52.5 C42,46.71 46.71,42 52.503,42 C58.293,42 63,46.71 63,52.5 C63,58.29 58.293,63 52.503,63 C46.71,63 42,58.29 42,52.5 Z', id: 'Shape' }),
                  _react2.default.createElement('path', { d: 'M64.5,0 L7.5,0 C3.363,0 0,3.363 0,7.5 L0,49.5 C0,53.637 3.363,57 7.5,57 L32.715,57 C33.543,57 34.215,56.328 34.215,55.5 C34.215,54.672 33.543,54 32.715,54 L7.5,54 C5.019,54 3,51.981 3,49.5 L3,18 L69,18 L69,49.5 C69,50.328 69.672,51 70.5,51 C71.328,51 72,50.328 72,49.5 L72,7.5 C72,3.363 68.637,0 64.5,0 Z M3,15 L3,7.5 C3,5.019 5.019,3 7.5,3 L64.5,3 C66.981,3 69,5.019 69,7.5 L69,15 L3,15 Z', id: 'Shape' }),
                  _react2.default.createElement('circle', { id: 'Oval', cx: '12', cy: '9', r: '3' }),
                  _react2.default.createElement('circle', { id: 'Oval', cx: '21', cy: '9', r: '3' }),
                  _react2.default.createElement('circle', { id: 'Oval', cx: '30', cy: '9', r: '3' }),
                  _react2.default.createElement('path', { d: 'M21.5,22 L12.5,22 C11.672,22 11,22.672 11,23.5 L11,32.5 C11,33.328 11.672,34 12.5,34 L21.5,34 C22.328,34 23,33.328 23,32.5 L23,23.5 C23,22.672 22.328,22 21.5,22 Z M20,31 L14,31 L14,25 L20,25 L20,31 Z', id: 'Shape' }),
                  _react2.default.createElement('path', { d: 'M21.5,38 L12.5,38 C11.672,38 11,38.672 11,39.5 L11,48.5 C11,49.328 11.672,50 12.5,50 L21.5,50 C22.328,50 23,49.328 23,48.5 L23,39.5 C23,38.672 22.328,38 21.5,38 Z M20,47 L14,47 L14,41 L20,41 L20,47 Z', id: 'Shape-Copy-3' }),
                  _react2.default.createElement('path', { d: 'M39.5,22 L30.5,22 C29.672,22 29,22.672 29,23.5 L29,32.5 C29,33.328 29.672,34 30.5,34 L39.5,34 C40.328,34 41,33.328 41,32.5 L41,23.5 C41,22.672 40.328,22 39.5,22 Z M38,31 L32,31 L32,25 L38,25 L38,31 Z', id: 'Shape-Copy' }),
                  _react2.default.createElement('path', { d: 'M57.5,22 L48.5,22 C47.672,22 47,22.672 47,23.5 L47,32.5 C47,33.328 47.672,34 48.5,34 L57.5,34 C58.328,34 59,33.328 59,32.5 L59,23.5 C59,22.672 58.328,22 57.5,22 Z M56,31 L50,31 L50,25 L56,25 L56,31 Z', id: 'Shape-Copy-2' })
                )
              ),
              _react2.default.createElement(
                'g',
                { id: 'Invisible_Shape' },
                _react2.default.createElement('rect', { id: 'Rectangle-path', x: '0', y: '0', width: '72', height: '72' })
              )
            )
          )
        )
      );
    }
  }]);

  return CockpitIcon;
}(_react2.default.Component);

CockpitIcon.defaultProps = defaultProps;
CockpitIcon.propTypes = propTypes;

exports.default = CockpitIcon;