import React from 'react'
import PropTypes from 'prop-types'
import Brandy from '../Brandy'

const propTypes = {
  onLogoClick: PropTypes.func
}
const defaultProps = {
  onLogoClick: () => {}
}

class Logo extends React.Component {
  render () {
    const props = this.props

    if (props.expand) {
      return (
        <div style={{height: '80px', padding: '12px 45px'}}>
          <Brandy
            onLogoClick={props.onLogoClick}
            height={60}
            width={120} />
        </div>
      )
    } 

    return (
      <div style={{height: '80px', width: '100%', padding: '21px 4px'}}>
        <Brandy logoVariant='m' onLogoClick={props.onLogoClick} />
      </div>
    )
  }
}

Logo.propTypes = propTypes
Logo.defaultProps = defaultProps

export default Logo
