import React from 'react'
import PropTypes from 'prop-types'
import Warning from '../svg-icons/Warning'

const propTypes = {
  message: PropTypes.string,
  icon: PropTypes.node
}

const defaultProps = {
  message: 'Failed to load data. Something Went Wrong.',
  icon: <Warning fill='rgb(230,92,66)' />
}

class Missie extends React.Component {
  render () {
    return (
      <div className='text-center'>
        <div style={{marginBottom: '32px'}}>
          <div style={{ height: '80px', width: '80px', margin: 'auto' }}>
            {this.props.icon}
          </div>
        </div>
        <div style={{marginBottom: '32px'}}>
          <span>{this.props.message}</span>
        </div>
      </div>
    )
  }
}

Missie.propTypes = propTypes
Missie.defaultProps = defaultProps

export default Missie
