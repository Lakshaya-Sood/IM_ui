import React, {PropTypes} from 'react'
import { FuiTheme } from '../zutils/StyleConfig'
import Expand from './Expand'
import Profile from './Profile'
import Version from './Version'
import Logo from './Logo'

const propTypes = {
  containerStyle: PropTypes.object,
  onLogoClick: PropTypes.func,
  onExpandClick: PropTypes.func,
  onUserProfileClick: PropTypes.func,
  notificationCount: PropTypes.number,
  appVersion: PropTypes.string
}

const defaultProps = {
  containerStyle: {},
  onLogoClick: null,
  onExpandClick: () => {},
  onUserProfileClick: () => {},
  notificationCount: 0,
  appVersion: ''
}

class Sidney extends React.Component {
  render () {
    const props = this.props
    let expandedStyle = {}
    if (props.expand) {
      expandedStyle = {width: '240px'}
    }
    const containerStyle = Object.assign({}, FuiTheme.sidney, expandedStyle, props.containerStyle)

    const childrenWithProps = React.Children.map(props.children,
     (child) => React.cloneElement(child, {
       expand: props.expand
     })
    )

    return (
      <div style={containerStyle}>

        <Logo onLogoClick={props.onLogoClick} expand={props.expand} />

        {childrenWithProps}

        <div style={{position: 'absolute', bottom: '0', right: 0, left: 0}}>

          <Profile
            expand={props.expand}
            onUserProfileClick={props.onUserProfileClick}
            notificationCount={props.notificationCount} />

          <Expand onExpandClick={props.onExpandClick} expand={props.expand} />

          <Version appVersion={props.appVersion} expand={props.expand} />

        </div>
      </div>
    )
  }
}

Sidney.propTypes = propTypes
Sidney.defaultProps = defaultProps

export default Sidney
