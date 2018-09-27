import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Badge from 'material-ui/Badge'
import {FuiTheme} from '../zutils/StyleConfig'
import ProfileIcon from '../svg-icons/Profile'

const userIconStyle = FuiTheme.userIcon
const primaryBadgeStyle = FuiTheme.badge.primary
// todo: userIconStyle not working, make it work

const propTypes = {
  notificationCount: PropTypes.number,
  iconStyle: PropTypes.object,
  badgeStyle: PropTypes.object
}

const defaultProps = {
  notificationCount: 0,
  iconStyle: {},
  badgeStyle: {}
}

const styles = {
  smallIcon: {
    width: 32,
    height: 32,
    margin: '0 auto',
    color: '#fff'
  }
}

class UserIcon extends Component {
  render () {
    const props = this.props
    const iconStyle = Object.assign({}, styles.smallIcon, props.iconStyle)
    const badgeStyle = Object.assign({}, primaryBadgeStyle, props.badgeStyle)

    return (
      <Badge
        badgeContent={props.notificationCount}
        badgeStyle={badgeStyle}
        style={{padding: '0'}}>
        <div style={iconStyle}>
          <ProfileIcon fill={iconStyle.color} />
        </div>
      </Badge>
    )
  }
}

UserIcon.propTypes = propTypes
UserIcon.defaultProps = defaultProps

export default UserIcon
