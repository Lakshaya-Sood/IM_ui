import React, {PropTypes} from 'react'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import BrandLogo from '../BrandLogo'
import UserIcon from '../UserIcon'
import CountryFlag from '../CountryFlag'
import {FuiTheme} from '../zutils/StyleConfig'
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down'

const style = FuiTheme.appHeader

const propTypes = {
  href: PropTypes.string,
  headerOptions: PropTypes.object
}

const defaultProps = {
  href: ''
}

class AppHeader extends React.Component {
  render () {
    const props = this.props
    const headerOptions = this.props.headerOptions || {}

    return (
      <Toolbar style={style}>
        <ToolbarGroup firstChild>
          {props.getSidebar && props.getSidebar() }
          <BrandLogo {...props} />
        </ToolbarGroup>
        <ToolbarGroup firstChild>
          {headerOptions.countryFlag && headerOptions.countryFlag.countryLabel && <div style={{ display: 'inline-block', paddingRight: '15px', color: 'white' }} >{headerOptions.countryFlag.countryLabel}</div>}
          {headerOptions.countryFlag && headerOptions.countryFlag.countryCode ? <CountryFlag countryCode={headerOptions.countryFlag.countryCode} /> : null}
          {headerOptions.countryFlag && headerOptions.countryFlag.handleClick ? <ArrowDropDown style={{color: 'white'}} onClick={headerOptions.countryFlag.handleClick} /> : null}
          <UserIcon {...props} title={headerOptions.userIconTitle} subtitle={headerOptions.userIconSubtitle}>
            {headerOptions.userIcon && headerOptions.userIcon.dropdownContent}
          </UserIcon >
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

AppHeader.propTypes = propTypes
AppHeader.defaultProps = defaultProps

export default AppHeader
