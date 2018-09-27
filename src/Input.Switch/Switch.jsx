import React, {PropTypes} from 'react'
import Toggle from 'material-ui/Toggle'

const propTypes = {
  fuiStyle: PropTypes.string,
  label: React.PropTypes.string,
  onToggle: React.PropTypes.function,
  toggled: React.PropTypes.bool
}

const defaultProps = {
  fuiStyle: 'primary',
  label: '',
  onToggle: null,
  toggled: false
}
const styles = {
  thumbOff: {
    backgroundColor: '#fff'
  },
  trackOff: {
    backgroundColor: '#74BA00'
  },
  thumbSwitched: {
    backgroundColor: '#74BA00'
  },
  trackSwitched: {
    backgroundColor: '#74BA00'
  },
  labelStyle: {
    fontWeight: 300
  }
}

class Switch extends React.Component {
  render () {
    const props = this.props
    return (
      <Toggle {...props}
        thumbStyle={styles.thumbOff}
        trackStyle={styles.trackOff}
        thumbSwitchedStyle={styles.thumbSwitched}
        trackSwitchedStyle={styles.trackSwitched}
        labelStyle={styles.labelStyle}
      />
    )
  }
}

Switch.propTypes = propTypes
Switch.defaultProps = defaultProps

export default Switch
