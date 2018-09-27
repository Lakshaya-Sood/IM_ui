import React from 'react'
import PropTypes from 'prop-types'
import SidneyOption from './SidneyOption'
import Profile from '../User.Profile'

const propTypes = {
  onUserProfileClick: PropTypes.func,
  notificationCount: PropTypes.number,
  selected: PropTypes.bool
}
const defaultProps = {
  onUserProfileClick: () => {},
  notificationCount: 0,
  selected: false
}

class UserProfile extends React.Component {
  render () {
    const props = this.props
    return (
      <div title={'My Profile'}>
        <SidneyOption
          expand={props.expand}
          selected={props.selected}
          onClick={props.onUserProfileClick}
          label='My Profile'
          icon={<Profile
            badgeStyle={{ width: '16px', height: '16px' }}
            iconStyle={{ width: '28px', height: '28px' }}
            notificationCount={props.notificationCount} />} />
      </div>
    )
  }
}

UserProfile.propTypes = propTypes
UserProfile.defaultProps = defaultProps

export default UserProfile
