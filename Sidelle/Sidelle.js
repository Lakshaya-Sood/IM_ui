'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _SidelleTitle = require('./SidelleTitle');

var _SidelleTitle2 = _interopRequireDefault(_SidelleTitle);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    title: _react.PropTypes.string,
    width: _react.PropTypes.number,
    containerStyle: _react.PropTypes.object,
    overlayStyle: _react.PropTypes.object,
    onRequestChange: _react.PropTypes.func
};

var defaultProps = {
    title: '',
    width: 392,
    containerStyle: {},
    overlayStyle: {},
    onRequestChange: function onRequestChange() {}
};

var Sidelle = function (_React$Component) {
    _inherits(Sidelle, _React$Component);

    function Sidelle(props) {
        _classCallCheck(this, Sidelle);

        var _this = _possibleConstructorReturn(this, (Sidelle.__proto__ || Object.getPrototypeOf(Sidelle)).call(this, props));

        _this.handleToggle = function () {
            return _this.setState({ open: !_this.state.open });
        };

        _this.handleClose = function () {
            _this.setState({ open: false });
            _this.props.onRequestChange(false);
        };

        _this.onRequestChange = function (open) {
            _this.setState({ open: open });
            _this.props.onRequestChange(open);
        };

        _this.state = {
            open: false
        };
        return _this;
    }

    _createClass(Sidelle, [{
        key: 'render',
        value: function render() {
            var props = this.props;

            var style = {
                'background-color': 'fff',
                boxShadow: '0 8px 32px 0 rgba(3,22,51,0.20)',
                zIndex: '1298'
            };

            var containerStyle = Object.assign({}, style, props.containerStyle);
            var overlayStyle = Object.assign({}, { opacity: 0 }, props.overlayStyle);
            return _react2.default.createElement(
                _Drawer2.default,
                {
                    docked: false,
                    zDepth: 4,
                    containerClassName: props.containerClassName,
                    containerStyle: containerStyle,
                    overlayStyle: overlayStyle,
                    width: props.width,
                    onRequestChange: this.onRequestChange,
                    open: this.state.open,
                    openSecondary: props.openSecondary },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_SidelleTitle2.default, { title: props.title, onClick: this.handleClose }),
                    props.children
                )
            );
        }
    }]);

    return Sidelle;
}(_react2.default.Component);

Sidelle.propTypes = propTypes;
Sidelle.defaultProps = defaultProps;

exports.default = Sidelle;