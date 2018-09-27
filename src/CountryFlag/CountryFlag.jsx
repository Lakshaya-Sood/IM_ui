import React from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'

const propTypes = {
  countryCode: PropTypes.string,
  title: PropTypes.string
}

function _getFlagImage (countryCode) {
  if (!countryCode) return null
  return (
    <img src={require('./' + countryCode + '.png')} style={{ width: '30px', height: '20px' }} />
  )
}

class CountryFlag extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.handleClick && this.props.handleClick()
  }

  render () {
    const props = this.props

    return (
      <div style={{ display: 'inline-block' }}
        onClick={this.handleClick} className={this.props.handleClick && 'clickable'}>
        <div style={{ display: 'inline-block' }}>
          <span>
            {_getFlagImage(props.countryCode)}
            &nbsp;
          </span>
        </div>
        {props.title && <div style={{ display: 'inline-block' }}>{props.title}</div>}
      </div>
    )
  }
}

CountryFlag.propTypes = propTypes

export default CountryFlag
