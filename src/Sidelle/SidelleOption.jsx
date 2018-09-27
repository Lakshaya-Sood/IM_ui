import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  onClick: PropTypes.func
}
const defaultProps = {
  onClick: () => {}
}

class SidelleOption extends React.Component {
  render () {
    const props = this.props
    const style = {
      padding: '18px 22px 17px 72px',
      position: 'relative',
      cursor: 'pointer',
      borderBottom: '1px solid #F2F3F4'
    }

    return (
      <div
        style={style}
        onClick={props.onClick}>
        <div style={{
          display: 'block',
          position: 'absolute',
          top: '14px',
          left: '32px',
          height: '28px',
          width: '28px'}}>
          {props.rightIcon}
        </div>

        <div style={{ display: 'block', color: '#0064FE', fontSize: '16px', 'line-height': '20px', fontWeight: 'bold' }}>
          {props.label}
        </div>

        <div style={{
          display: 'block',
          position: 'absolute',
          top: '14px',
          right: '20px',
          height: '28px',
          width: '28px'}}>
          {props.leftIcon}
        </div>
      </div>
    )
  }
}

SidelleOption.propTypes = propTypes
SidelleOption.defaultProps = defaultProps

export default SidelleOption
