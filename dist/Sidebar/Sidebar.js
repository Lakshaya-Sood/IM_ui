'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Close = require('../svg-icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Menu = require('../svg-icons/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _StyleConfig = require('../zutils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    width: _react.PropTypes.number,
    options: _react.PropTypes.object
};

var defaultProps = {
    width: 300,
    options: {}
};

var Sidebar = function (_React$Component) {
    _inherits(Sidebar, _React$Component);

    function Sidebar(props) {
        _classCallCheck(this, Sidebar);

        var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

        _this.handleToggle = function () {
            return _this.setState({ open: !_this.state.open });
        };

        _this.handleClose = function () {
            return _this.setState({ open: false });
        };

        _this.state = { open: false };
        return _this;
    }

    _createClass(Sidebar, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _IconButton2.default,
                    {
                        style: { height: '80px' },
                        iconStyle: { height: '32px', width: '32px', margin: '0 auto' },
                        onClick: this.handleToggle },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_Menu2.default, null)
                    )
                ),
                _react2.default.createElement(
                    _Drawer2.default,
                    {
                        containerStyle: _StyleConfig.FuiTheme.sidebar,
                        className: 'sidebar-menu',
                        containerClassName: 'sidebar-menu',
                        docked: false,
                        width: props.width,
                        onRequestChange: function onRequestChange(open) {
                            return _this2.setState({ open: open });
                        },
                        open: this.state.open },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            _IconButton2.default,
                            { className: 'pull-right', onClick: this.handleToggle },
                            _react2.default.createElement(_Close2.default, { className: 'sidebar-close-icon' })
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('br', null),
                        props.children || null
                    )
                )
            );
        }
    }]);

    return Sidebar;
}(_react2.default.Component);

exports.default = Sidebar;


Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;