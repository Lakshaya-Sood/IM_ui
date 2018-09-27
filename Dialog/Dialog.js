'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dialogSize = {
  small: {
    maxWidth: '505px'
  },
  large: {
    maxWidth: '992px'
  }
};

var dialogOverlayStyle = {
  backgroundColor: 'rgba(102, 129, 170, 0.1)'
};

var titleStyle = {
  color: '#002d72',
  fontSize: '20px',
  fontWeight: 'bold'
};
var bodyStyle = {
  color: '#35445B',
  fontSize: '16px',
  fontWeight: 'normal'
};

var ModalDialog = function (_React$Component) {
  _inherits(ModalDialog, _React$Component);

  function ModalDialog(props) {
    _classCallCheck(this, ModalDialog);

    var _this = _possibleConstructorReturn(this, (ModalDialog.__proto__ || Object.getPrototypeOf(ModalDialog)).call(this, props));

    _this.state = { open: false };
    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleOpen = _this.handleOpen.bind(_this);
    _this.renderTrigger = _this.renderTrigger.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    _this.handleConfirm = _this.handleConfirm.bind(_this);
    _this.renderActions = _this.renderActions.bind(_this);
    return _this;
  }

  _createClass(ModalDialog, [{
    key: 'handleOpen',
    value: function handleOpen() {
      this.setState({ open: true });
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({ open: false });
    }
  }, {
    key: 'handleConfirm',
    value: function handleConfirm() {
      var props = this.props;
      props.handleConfirm && props.handleConfirm();
      this.handleClose();
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel() {
      var props = this.props;
      props.handleCancel && props.handleCancel();
      this.handleClose();
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var props = this.props;
      if (props.children) {
        return props.children;
      }
      return props.message || 'Are you sure you want to do this?';
    }
  }, {
    key: 'renderTrigger',
    value: function renderTrigger() {
      var props = this.props;
      if (props.trigger) {
        return _react2.default.createElement(
          'span',
          { onTouchTap: this.handleOpen.bind(this) },
          props.trigger()
        );
      }
    }
  }, {
    key: 'renderActions',
    value: function renderActions() {
      var props = this.props;
      if (props.hideActions) {
        return null;
      }
      var actions = [_react2.default.createElement(_Button2.default, { label: props.cancelButtonLabel || 'Cancel', size: 'basic',
        fuiStyle: 'ghost', onClick: this.handleCancel }), _react2.default.createElement(_Button2.default, { label: props.confirmButtonLabel || 'Submit', size: 'basic',
        fuiStyle: this.props.confirmButtonFuiStyle || 'primary', onClick: this.handleConfirm })];
      return actions;
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var style = {};
      if (props.size) {
        style = dialogSize[props.size] || {};
      }
      var overlayStyle = Object.assign({}, dialogOverlayStyle, props.overlayStyle);
      var contentStyle = Object.assign({}, style, props.contentStyle);

      return _react2.default.createElement(
        'div',
        null,
        this.renderTrigger(),
        _react2.default.createElement(
          _Dialog2.default,
          _extends({
            title: props.title || 'Confirmation',
            titleStyle: titleStyle,
            bodyStyle: bodyStyle,
            actions: this.renderActions(),
            modal: this.props.modal,
            open: this.state.open,
            onRequestClose: this.handleClose.bind(this),
            autoScrollBodyContent: this.props.autoScrollBodyContent,
            contentStyle: contentStyle,
            overlayStyle: overlayStyle
          }, this.props),
          this.renderContent()
        )
      );
    }
  }]);

  return ModalDialog;
}(_react2.default.Component);

exports.default = ModalDialog;