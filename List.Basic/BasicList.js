'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListHeader = exports.BasicList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('material-ui/List');

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectableList = (0, _List.makeSelectable)(_List.List);

function wrapState(ComposedComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    _inherits(SelectableList, _Component);

    function SelectableList() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SelectableList);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectableList.__proto__ || Object.getPrototypeOf(SelectableList)).call.apply(_ref, [this].concat(args))), _this), _this.handleRequestChange = function (event, key) {
        _this.props.onChange && _this.props.onChange(event, key);
        _this.setState({
          selectedIndex: key
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SelectableList, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.setState({
          selectedIndex: this.props.defaultValue
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          ComposedComponent,
          {
            value: this.state.selectedIndex,
            onChange: this.handleRequestChange,
            style: { padding: 0 }
          },
          this.props.children
        );
      }
    }]);

    return SelectableList;
  }(_react.Component), _class.propTypes = {
    children: _react.PropTypes.node.isRequired,
    defaultValue: _react.PropTypes.number.isRequired
  }, _temp2;
}

SelectableList = wrapState(SelectableList);
var itemStyle = {
  borderBottom: 'solid 1px #efefef'
};

var activeItemStyle = {
  borderLeft: '4px solid #c74a1b',
  'background-color': '#F7F8F9',
  borderBottom: 'solid 1px #efefef'
};

var BasicList = exports.BasicList = function (_React$Component) {
  _inherits(BasicList, _React$Component);

  function BasicList() {
    _classCallCheck(this, BasicList);

    return _possibleConstructorReturn(this, (BasicList.__proto__ || Object.getPrototypeOf(BasicList)).apply(this, arguments));
  }

  _createClass(BasicList, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var divClassName = this.props.className ? 'card ' + this.props.className : 'card';

      var listItems = this.props.listItems.map(function (item, i) {
        return _react2.default.createElement(_List.ListItem, {
          value: item.key,
          leftAvatar: item.leftAvatar,
          rightIcon: item.rightIcon,
          primaryText: item.primaryText,
          secondaryText: item.secondaryText,
          children: item.children,
          disableTouchRipple: props.disableTouchRipple,
          disableFocusRipple: props.disableFocusRipple,
          style: item.key === props.defaultSelected ? activeItemStyle : itemStyle
        });
      });

      return _react2.default.createElement(
        'div',
        { className: divClassName, style: this.props.style },
        _react2.default.createElement(
          SelectableList,
          {
            defaultValue: props.defaultSelected, onChange: props.onChange },
          _react2.default.createElement(ListHeader, { title: props.title }),
          listItems
        )
      );
    }
  }]);

  return BasicList;
}(_react2.default.Component);

var ListHeader = exports.ListHeader = function (_React$Component2) {
  _inherits(ListHeader, _React$Component2);

  function ListHeader() {
    _classCallCheck(this, ListHeader);

    return _possibleConstructorReturn(this, (ListHeader.__proto__ || Object.getPrototypeOf(ListHeader)).apply(this, arguments));
  }

  _createClass(ListHeader, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Subheader2.default,
          { className: 'font-light',
            style: { fontSize: '16px', color: '#666' } },
          props.title
        ),
        _react2.default.createElement(_Divider2.default, null)
      );
    }
  }]);

  return ListHeader;
}(_react2.default.Component);

exports.default = BasicList;