import React from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import NavigationClose from '../svg-icons/Close'

const propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
}
const defaultProps = {
  title: '',
  onClick: () => {}
}

class SidelleTitle extends React.Component {
  render () {
    const props = this.props

    if (!props.title) return null

    return (
      <div style={{padding: '22px 22px', borderBottom: '1px solid #F2F3F4'}}>
        <span style={{fontSize: '20px', lineHeight: '26px', color: '#002B72'}}>{props.title}</span>
        <div style={{
          display: 'block',
          position: 'absolute',
          top: '10px',
          right: '20px'}}>
          <IconButton
            onClick={props.onClick}
            iconStyle={{height: '28px', width: '28px', margin: '0 auto'}}>
            <div><NavigationClose fill='#002B74' /></div>
          </IconButton>
        </div>

      </div>
    )
  }
}

SidelleTitle.propTypes = propTypes
SidelleTitle.defaultProps = defaultProps

export default SidelleTitle
