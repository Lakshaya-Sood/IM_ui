import React from 'react'
import MuiChip from 'material-ui/Chip'
import Proptypes from 'prop-types'

const styles = {
  chip: {
    margin: 4,
    borderRadius: 2,
    height: '40px'
  },
  labelStyle: {
    color: '#002d72',
    fontSize: '16px',
    lineHeight: '36px'
  },
  deleteIconStyle: {
    margin: '8px 4px 0px -8px'
  }
}

const propTypes = {
  onRequestDelete: Proptypes.func,
  fuiStyle: Proptypes.string,
  onClick: Proptypes.func,
  key: Proptypes.string,
  backgroundColor: Proptypes.backgroundColor
}

const defaultProps = {
  onRequestDelete: null,
  fuiStyle: 'secondary',
  onClick: () => {},
  backgroundColor: '#e6f0ff'
}

class Chip extends React.Component {
  render () {
    const { fuiStyle } = this.props
    let labelStyle = styles.labelStyle
    let deleteIconStyle = styles.deleteIconStyle
    let bg = this.props.backgroundColor
    
    // change bg based on style
    if (fuiStyle === 'primary') {
      bg = '#0050cb',
      labelStyle = Object.assign({},  labelStyle, {color: '#fff'})
      deleteIconStyle = Object.assign({}, {fill: '#fff', color: '#fff'}, deleteIconStyle)
    }
    
    return (
      <MuiChip
        backgroundColor={bg}
        key={this.props.key}
        onRequestDelete={this.props.onRequestDelete}
        onClick={this.props.onClick}
        style={styles.chip}
        labelStyle={labelStyle}
        deleteIconStyle={deleteIconStyle} >
        {this.props.children}
      </MuiChip>
    )
  }
}

Chip.defaultProps = defaultProps
Chip.propTypes = propTypes

export default Chip