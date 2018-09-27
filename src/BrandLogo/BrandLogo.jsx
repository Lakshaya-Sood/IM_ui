import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  href: PropTypes.string
}

const defaultProps = {
  href: ''
}

class BrandLogo extends React.Component {
  constructor (props) {
    super(props)
    this.handleLogoClick = this.handleLogoClick.bind(this)
  }

  handleLogoClick () {
    const props = this.props
    props.headerOptions.handleLogoClick && props.headerOptions.handleLogoClick()
    // props.href && (window.location = props.href);
  }

  render () {
    const props = this.props
    let style = ''
    props.onLogoClick && (style = 'fui-clickable')
    const brandLogo = props.logoVariant === 'm' ? require('./brand_logo_m.png') : require('./brand-logo.png')
    return (
      <div className={style} onClick={this.handleLogoClick} style={{padding: '25px 22px'}}>
        <div>
          <img src={props.headerOptions.imageSrc || brandLogo} style={{
            'max-width': '130px',
            height: '25px'
          }} />
        </div>
        <div className='text-white-base' style={{fontSize: '16px'}}>
          { props.headerOptions.productName || null}
        </div>

      </div>
    )
  }
}

BrandLogo.propTypes = propTypes
BrandLogo.defaultProps = defaultProps

export default BrandLogo
