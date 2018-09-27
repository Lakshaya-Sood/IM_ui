import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  appVersion: PropTypes.string
}
const defaultProps = {
  appVersion: ''
}

class Version extends React.Component {
  render () {
    const props = this.props
    return (
      <div style={{height: '46px',
        textAlign: 'center',
        fontSize: '13px',
        color: '#fff',
        padding: '12px',
        opacity: '.6'}}>
        {props.appVersion}
      </div>
    )
  }
}

Version.propTypes = propTypes
Version.defaultProps = defaultProps

export default Version
