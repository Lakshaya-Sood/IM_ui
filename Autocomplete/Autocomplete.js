'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AutoComplete = require('material-ui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  placeholder: _react.PropTypes.string
};

var defaultProps = {
  placeholder: 'Start typings'
};

var style = {
  backgroundColor: '#fff',
  color: '#35445B',
  height: '40px',
  border: '1px solid #CCD0D6',
  lineHeight: '22px',
  fontSize: '16px'
};

var Autocomplete = function (_React$Component) {
  _inherits(Autocomplete, _React$Component);

  function Autocomplete(props) {
    _classCallCheck(this, Autocomplete);

    var _this = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, props));

    _this.state = {
      color: '',
      // based on this value, trying to maintain autocomplete's menu state open/close
      shouldOpenList: props.openonfocus || false,
      searchText: _this.props.searchText
    };
    return _this;
  }

  _createClass(Autocomplete, [{
    key: 'onNewRequest',
    value: function onNewRequest(chosenRequest, index) {
      this.props.onChange(true, chosenRequest);
    }
  }, {
    key: 'onUpdateInput',
    value: function onUpdateInput(searchText, dataSource, params) {
      if (this.props.minCharacters && this.props.minCharacters !== undefined) {
        var min_character = this.props.minCharacters;

        if (searchText && searchText.length >= this.props.minCharacters) {
          this.setShouldOpenList(true, searchText);
          this.props.onChange(false, searchText);
        } else {
          this.setShouldOpenList(false, searchText);
          this.props.onChange(false, searchText);
        }
      } else {
        this.setShouldOpenList(true, searchText);
        this.props.onChange(false, searchText);
      }
    }
  }, {
    key: 'setShouldOpenList',
    value: function setShouldOpenList(value, text) {
      this.setState({
        shouldOpenList: value,
        searchText: text
      });
    }
  }, {
    key: 'getFilter',
    value: function getFilter(filter) {
      switch (filter) {
        case 'Insensitive':
          return _AutoComplete2.default.caseInsensitiveFilter;
        case 'Fuzzy':
          return _AutoComplete2.default.fuzzyFilter;
        default:
          return '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var filter = this.getFilter(this.props.filter);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AutoComplete2.default, {
          popoverProps: {
            open: this.state.shouldOpenList
          },
          hintText: props.placeholder,
          dataSource: props.data,
          dataSourceConfig: { text: props.text, value: props.value },
          className: 'fabric-autocomplete form-control',
          disableFocusRipple: false,
          filter: filter,
          textFieldStyle: style,
          searchText: this.state.searchText,
          onNewRequest: this.onNewRequest.bind(this),
          onUpdateInput: this.onUpdateInput.bind(this),
          openOnFocus: this.props.minCharacters && this.props.minCharacters !== undefined ? false : this.props.openonfocus
        })
      );
    }
  }]);

  return Autocomplete;
}(_react2.default.Component);

Autocomplete.propTypes = propTypes;
Autocomplete.defaultProps = defaultProps;
exports.default = Autocomplete;