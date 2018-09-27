import React, {PropTypes} from 'react'
import IconButton from 'material-ui/IconButton'
import Badge from 'material-ui/Badge'
import Popover from '../Popover'
import {FuiTheme} from '../zutils/StyleConfig'
import Profile from '../User.Profile'

const userIconStyle = FuiTheme.userIcon
const primaryBadgeStyle = FuiTheme.badge.primary
// todo: userIconStyle not working, make it work

const propTypes = {
  notification: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  overlayContent: PropTypes.string
}

const defaultProps = {
  notification: 0
}

const styles = {
  smallIcon: {
    width: 32,
    height: 32,
    margin: '0 auto'
  },
  userName: {
    position: 'relative',
    bottom: '18px'
  }
}

class UserIcon extends React.Component {
  constructor (props) {
    super(props)
    this.renderUserIcon = this.renderUserIcon.bind(this)
  }

  renderUserIcon () {
    return (
      <div>
        <IconButton
          onClick={this.props.onUserProfileClick}
          style={{height: '80px', width: '80px'}}>
          <Profile notificationCount={this.props.notification} />
        </IconButton>

        <div className='hidden-xs' style={{ display: 'inline-block' }}>
          <div style={userIconStyle.title}><small>{this.props.title}</small></div>
          <div style={userIconStyle.subtitle}><small>{this.props.subtitle}</small></div>
        </div>
      </div>
    )
  }

  render () {
    const props = this.props
    //
    if (props.children) {
      return (
        <div>
          <Popover trigger={this.renderUserIcon()}>
            {props.children}
          </Popover>
        </div>
      )
    }

    return (
      <div>
        {this.renderUserIcon() }
      </div>
    )
  }
}

UserIcon.propTypes = propTypes
UserIcon.defaultProps = defaultProps

export default UserIcon
