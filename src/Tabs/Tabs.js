import React from 'react'
import PropTypes from 'prop-types'
import {Tabs, Tab} from 'material-ui/Tabs'

const propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

const defaultProps = {
}

class FuiTabs extends React.Component {
  render () {
    const props = this.props

    const options = props.tabDefs.map((option, i) => (
      <Tab
        style={{color: '#666'}}
        label={option.label}
        disabled={option.disabled}
        value={option.key}>{option.content || null}</Tab>
    ))

    return (
      <Tabs
        tabItemContainerStyle={{backgroundColor: 'transparent'}}
        inkBarStyle={{backgroundColor: '#0099FF'}}
        onChange={this.props.onChange}
        value={this.props.value}>
        {options}
      </Tabs>
    )
  }
}

FuiTabs.propTypes = propTypes
FuiTabs.defaultProps = defaultProps

export default FuiTabs
