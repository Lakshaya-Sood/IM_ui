import React from 'react'
import PropTypes from 'prop-types'
import SidneyOption from './SidneyOption'
const expandIcon = require('./expand.png')
const collapseIcon = require('./collapse.png')

const propTypes = {
  onExpandClick: PropTypes.func
}
const defaultProps = {
  onExpandClick: () => {}
}

class Expand extends React.Component {
  render () {
    const props = this.props
    return (
      <div title={props.expand ? 'Collapse' : 'Expand'}>
        <SidneyOption
          expand={props.expand}
          label='Collapse'
          onClick={props.onExpandClick}
          icon={props.expand ? <img src={collapseIcon} height='28' width='28' /> : <img src={expandIcon} height='28' width='28' />} />
      </div>
    )
  }
}

Expand.propTypes = propTypes
Expand.defaultProps = defaultProps

export default Expand
