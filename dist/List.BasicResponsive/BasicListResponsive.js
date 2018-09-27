'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicListResponsive = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Form = require('../Form');

var _Form2 = _interopRequireDefault(_Form);

var _List = require('../List.Basic');

var _List2 = _interopRequireDefault(_List);

var _Input = require('../Input.Dropdown');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import {List, ListItem, makeSelectable} from 'material-ui/List';
// import Divider from 'material-ui/Divider';
// import Subheader from 'material-ui/Subheader';


// import BasicSelectField from './SelectField.Basic'
var complexityOptions = [{ title: 'High', value: 'high' }, { title: 'Medium', value: 'medium' }, { title: 'Low', value: 'low' }, { title: 'Very Low', value: 'verylow' }];

var BasicListResponsive = exports.BasicListResponsive = function (_React$Component) {
  _inherits(BasicListResponsive, _React$Component);

  function BasicListResponsive() {
    _classCallCheck(this, BasicListResponsive);

    return _possibleConstructorReturn(this, (BasicListResponsive.__proto__ || Object.getPrototypeOf(BasicListResponsive)).apply(this, arguments));
  }

  _createClass(BasicListResponsive, [{
    key: 'getDropdownOptions',
    value: function getDropdownOptions() {
      var items = [];
      for (var i = 0; i < this.props.listItems.length; i++) {
        var title = this.props.listItems[i].primaryText;
        var value = this.props.listItems[i].key;
        items.push({ 'title': title, 'value': value });
      }
      return items;
    }
  }, {
    key: 'onChange',
    value: function onChange(value, event) {
      console.log('event value', event, value);
      this.props.onChange && this.props.onChange(event, value);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var items = this.getDropdownOptions();
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: props.basicListClass || 'hidden-xs' },
          _react2.default.createElement(_List2.default, props)
        ),
        _react2.default.createElement(
          'div',
          { className: props.dropdownClass || 'hidden-lg hidden-md hidden-sm', style: { height: '70px' } },
          _react2.default.createElement(
            _Form2.default,
            null,
            _react2.default.createElement(_Input2.default, _extends({ options: items, value: props.defaultSelected }, props, { onChange: this.onChange.bind(this) }))
          )
        )
      );
    }
  }]);

  return BasicListResponsive;
}(_react2.default.Component);

exports.default = BasicListResponsive;