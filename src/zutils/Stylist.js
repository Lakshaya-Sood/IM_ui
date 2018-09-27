import classnames from 'classnames'
import {State, Size} from './StyleConfig'

export function getCardStyle (state) {
  return classnames({
    'm-b-75 text-muted': true,
    'card-primary-brand': state === State.PRIMARY,
    'card-info-brand': state === State.INFO,
    'card-white-brand': state === State.DEFAULT,
    'card-success-brand': state === State.SUCCESS,
    'card-success-special-brand': state === State.SUCCESS_SPECIAL,
    'card-danger-brand': state === State.DANGER,
    'card-warning-brand': state === State.WARNING,
    'card-warning-special-brand': state == State.WARNING_SPECIAL
  })
}

export function getTileStyle (state) {
  return getCardStyle(state) + ' text-center'
}

export function getWaferStyle (state) {
  return getTileStyle(state)
}

export function getCrackerStyle (state) {
  return getTileStyle(state)
}

export function getWaffleBarStyle (state, inverted) {
  return classnames({
    'waffle-bar': true,
    'inverted': inverted,
    info: state === State.INFO,
    success: state === State.SUCCESS,
    error: state === State.DANGER,
    warning: state === State.WARNING,
    primary: state === State.PRIMARY
  })
}

export function getButtonStyle (state) {
  return classnames({
    'fab-btn fab-btn-success': state === State.SUCCESS,
    'fab-btn fab-btn-info': state === State.INFO,
    'fab-btn fab-btn-warning': state === State.WARNING,
    'fab-btn fab-btn-primary': state === State.PRIMARY,
    'fab-btn fab-btn-ghost': state === 'ghost'
  })
}

export function getButtonSize (size) {
  return classnames({
    'fab-btn-small': size === Size.S,
    'fab-btn-basic': size === Size.M,
    'fab-btn-large': size === Size.L,
    'fab-btn-extra-large': size === Size.XL
  })
}

export function getPanelStyle (state) {
  return classnames({
    'fui-panel m-b-75': true,
    'fui-panel-info': state === State.INFO,
    'fui-panel-success': state === State.SUCCESS,
    'fui-panel-danger': state === State.DANGER,
    'fui-panel-warning': state === State.WARNING,
    'fui-panel-primary': state === State.PRIMARY
  })
}

export function getCardFooterItemStyle (state) {
  return classnames({
    'm-t-0  font-thin': true,
    'text-blue-variant3': state === State.INFO,
    'text-green-variant1': state === State.SUCCESS,
    'text-red-variant1': state === State.DANGER,
    'text-yellow-variant1': state === State.WARNING,
    'text-blue-variant1': state === State.PRIMARY
  })
}
