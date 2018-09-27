import React from 'react'
import PropTypes from 'prop-types'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import BrandLogo from '../BrandLogo'
import UserIcon from '../UserIcon'
import {FuiTheme} from '../zutils/StyleConfig'

const style = FuiTheme.appSecondaryHeader

const propTypes = {
  href: PropTypes.string,
  headerOptions: PropTypes.object
}

const defaultProps = {
  href: ''
}

function _handleSelect (option) {
  this.props.onClick && this.props.onClick(option)
}

class AppHeader extends React.Component {
  render () {
    const props = this.props
    const headerDefs = this.props.headerDefs ? _.reject(this.props.headerDefs, {isHidden: true}) : []

    const menuitems = headerDefs.map((option, i) => (
      <ToolbarTitle
        className={option.key === props.activeKey ? 'nav-item active' : 'nav-item'}
        onClick={_handleSelect.bind(this, option)}
        disabled={option.disabled}
        text={option.title}
        />
    ))

    return (
      <Toolbar style={style} className='fui-app-header-secondary'>
        {menuitems}
        {props.children}
      </Toolbar>
    )
  }
}
AppHeader.propTypes = propTypes
AppHeader.defaultProps = defaultProps
export default AppHeader
