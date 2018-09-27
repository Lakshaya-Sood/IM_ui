import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import { IconButton } from 'material-ui'
import Brandy from '../Brandy'
import Profile from '../User.Profile'
import { FuiTheme } from '../zutils/StyleConfig'
import Menu from './Menu'

const style = FuiTheme.heather

const propTypes = {
  isMenuOpen: PropTypes.bool,
  onMenuClick: PropTypes.func,
  onUserProfileClick: PropTypes.func,
  onLogoClick: PropTypes.func,
  notificationCount: PropTypes.number
}

const defaultProps = {
  isMenuOpen: false,
  onMenuClick: () => { },
  onUserProfileClick: () => { },
  onLogoClick: () => { },
  notificationCount: 0
}

class Heather extends React.Component {
  render() {
    const props = this.props
    const headerOptions = {}

    return (
      <Toolbar style={style}>
        <ToolbarGroup
          style={{ marginLeft: '-12px' }}
          firstChild>
          <Menu
            open={props.isMenuOpen}
            onMenuClick={props.onMenuClick} />
        </ToolbarGroup>

        <ToolbarGroup id='fui-heather-brand-logo'>
          <Brandy
            onLogoClick={props.onLogoClick} height={'40'} width={'95'} />

        </ToolbarGroup>

        <ToolbarGroup style={{ marginRight: '-12px' }}>
          <IconButton
            onClick={props.onUserProfileClick}
            style={{ height: '56px', width: '56px' }}>
            <Profile
              badgeStyle={{
                width: '16px',
                height: '16px'
              }}
              iconStyle={{
                width: '28px',
                height: '28px'
              }}
              notificationCount={props.notificationCount}
            />
          </IconButton>

        </ToolbarGroup>
      </Toolbar>
    )
  }
}

Heather.propTypes = propTypes
Heather.defaultProps = defaultProps

export default Heather
