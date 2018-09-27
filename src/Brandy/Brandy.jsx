import React from 'react'
import PropTypes from 'prop-types'
import MetroIcon from '../svg-icons/Metro'
import MetroUnitedIcon from '../svg-icons/MetroUnitedInverted'
import MUnitedIcon from '../svg-icons/MUnitedInverted'

const propTypes = {
  logoVariant: PropTypes.string,
  onLogoClick: PropTypes.func,
  height: PropTypes.number,
  width: PropTypes.number
}

const defaultProps = {
  logoVariant: null,
  onLogoClick: () => {},
  height: 22,
  width: 102
}

class Brandy extends React.Component {
  render () {
    const props = this.props
    let style = ''
    const iconstyle = {
      height: props.height,
      width: props.width
    }
    props.onLogoClick && (style = 'fui-clickable')
    const brandLogo = props.logoVariant === 'm'
    ? <img src={ require("../BrandLogo/brand_logo_m.png") } height='37' width='68' />: <img src={ require("../BrandLogo/brand-logo.png")} height={props.height} width={props.width}/>
    return (
      <div id='fui-brandy' className={style} onClick={props.onLogoClick}>
        {brandLogo}
      </div>
    )
  }
}

Brandy.propTypes = propTypes
Brandy.defaultProps = defaultProps

export default Brandy
