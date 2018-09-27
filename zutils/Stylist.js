'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCardStyle = getCardStyle;
exports.getTileStyle = getTileStyle;
exports.getWaferStyle = getWaferStyle;
exports.getCrackerStyle = getCrackerStyle;
exports.getWaffleBarStyle = getWaffleBarStyle;
exports.getButtonStyle = getButtonStyle;
exports.getButtonSize = getButtonSize;
exports.getPanelStyle = getPanelStyle;
exports.getCardFooterItemStyle = getCardFooterItemStyle;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _StyleConfig = require('./StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCardStyle(state) {
  return (0, _classnames2.default)({
    'm-b-75 text-muted': true,
    'card-primary-brand': state === _StyleConfig.State.PRIMARY,
    'card-info-brand': state === _StyleConfig.State.INFO,
    'card-white-brand': state === _StyleConfig.State.DEFAULT,
    'card-success-brand': state === _StyleConfig.State.SUCCESS,
    'card-success-special-brand': state === _StyleConfig.State.SUCCESS_SPECIAL,
    'card-danger-brand': state === _StyleConfig.State.DANGER,
    'card-warning-brand': state === _StyleConfig.State.WARNING,
    'card-warning-special-brand': state == _StyleConfig.State.WARNING_SPECIAL
  });
}

function getTileStyle(state) {
  return getCardStyle(state) + ' text-center';
}

function getWaferStyle(state) {
  return getTileStyle(state);
}

function getCrackerStyle(state) {
  return getTileStyle(state);
}

function getWaffleBarStyle(state, inverted) {
  return (0, _classnames2.default)({
    'waffle-bar': true,
    'inverted': inverted,
    info: state === _StyleConfig.State.INFO,
    success: state === _StyleConfig.State.SUCCESS,
    error: state === _StyleConfig.State.DANGER,
    warning: state === _StyleConfig.State.WARNING,
    primary: state === _StyleConfig.State.PRIMARY
  });
}

function getButtonStyle(state) {
  return (0, _classnames2.default)({
    'fab-btn fab-btn-success': state === _StyleConfig.State.SUCCESS,
    'fab-btn fab-btn-info': state === _StyleConfig.State.INFO,
    'fab-btn fab-btn-warning': state === _StyleConfig.State.WARNING,
    'fab-btn fab-btn-primary': state === _StyleConfig.State.PRIMARY,
    'fab-btn fab-btn-ghost': state === 'ghost'
  });
}

function getButtonSize(size) {
  return (0, _classnames2.default)({
    'fab-btn-small': size === _StyleConfig.Size.S,
    'fab-btn-basic': size === _StyleConfig.Size.M,
    'fab-btn-large': size === _StyleConfig.Size.L,
    'fab-btn-extra-large': size === _StyleConfig.Size.XL
  });
}

function getPanelStyle(state) {
  return (0, _classnames2.default)({
    'fui-panel m-b-75': true,
    'fui-panel-info': state === _StyleConfig.State.INFO,
    'fui-panel-success': state === _StyleConfig.State.SUCCESS,
    'fui-panel-danger': state === _StyleConfig.State.DANGER,
    'fui-panel-warning': state === _StyleConfig.State.WARNING,
    'fui-panel-primary': state === _StyleConfig.State.PRIMARY
  });
}

function getCardFooterItemStyle(state) {
  return (0, _classnames2.default)({
    'm-t-0  font-thin': true,
    'text-blue-variant3': state === _StyleConfig.State.INFO,
    'text-green-variant1': state === _StyleConfig.State.SUCCESS,
    'text-red-variant1': state === _StyleConfig.State.DANGER,
    'text-yellow-variant1': state === _StyleConfig.State.WARNING,
    'text-blue-variant1': state === _StyleConfig.State.PRIMARY
  });
}