import React, {PropTypes} from 'react'
import CircularProgress from 'material-ui/CircularProgress'

const propTypes = {
  fuiStyle: PropTypes.string
}

const defaultProps = {
  fuiStyle: 'primary'
}

class Spinner extends React.Component {
  render () {
    let props = this.props
    return (
      <div className='text-center'>
        <CircularProgress size={80} thickness={5} />
        <br /><br />
      </div>
    )
  }
}

Spinner.propTypes = propTypes
Spinner.defaultProps = defaultProps

export default Spinner
