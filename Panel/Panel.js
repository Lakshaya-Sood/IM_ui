'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _Stylist = require('../zutils/Stylist');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//todo do panel header Component

var propTypes = {
    fuiStyle: _react.PropTypes.string,
    title: _react2.default.PropTypes.string,
    subtitle: _react2.default.PropTypes.string

};

var defaultProps = {
    fuiStyle: 'info',
    title: '',
    subtitle: ''
};

var Panel = function (_React$Component) {
    _inherits(Panel, _React$Component);

    function Panel(props) {
        _classCallCheck(this, Panel);

        var _this = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props));

        _this.handleExpand = function () {
            _this.setState({ expanded: true });
        };

        _this.state = { expanded: false };
        return _this;
    }

    _createClass(Panel, [{
        key: 'render',
        value: function render() {
            var props = this.props;
            var style = (0, _Stylist.getPanelStyle)(props.fuiStyle);
            var expand = this.props.initiallyExpanded || false;
            return _react2.default.createElement(
                _Card.Card,
                { className: style, initiallyExpanded: expand, style: { color: '#002D72' } },
                _react2.default.createElement(_Card.CardHeader, { className: 'fui-panel-header', title: props.title, subtitle: props.subtitle, actAsExpander: true,
                    showExpandableButton: true, titleColor: '#002D72', subtitleColor: '#002D72' }),
                _react2.default.createElement(
                    _Card.CardText,
                    { expandable: true },
                    props.children
                )
            );
        }
    }]);

    return Panel;
}(_react2.default.Component);

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;

exports.default = Panel;