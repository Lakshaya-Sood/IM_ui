import React from 'react'
import Proptypes from 'prop-types'

const propTypes = {
  fill: Proptypes.string
}

const defaultProps = {
  fill: '#ffffff'
}

class Edit extends React.Component {
  render () {
    const props = this.props
    return (
      <svg fill={props.fill} id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <title>icon</title>
        <path d='M31,30H9.64l.15,0a1,1,0,0,0,.48-.27l.33-.33h0L28.09,11.88h0v0L30,10h0v0L30.93,9a3.66,3.66,0,0,0,0-5.16L28.12,1.07a3.65,3.65,0,0,0-5.16,0L22,2h0L20.15,3.88h0L2.64,21.39h0l-.33.33a1,1,0,0,0-.27.48L0,30.77A1,1,0,0,0,0,31s0,0,0,0H0a1,1,0,0,0,.07.34l0,.08a1,1,0,0,0,.19.28A1,1,0,0,0,1,32H31a1,1,0,0,0,0-2ZM3.7,23.88,8.12,28.3,2.34,29.66ZM20.86,6,26,11.16,9.9,27.24,4.76,22.1Zm1.87-1.88,5.14,5.14-.47.47L22.27,4.59Zm4-1.64,2.81,2.81a1.65,1.65,0,0,1,0,2.33l-.23.23L24.15,2.71l.23-.23A1.65,1.65,0,0,1,26.71,2.48Z' /></svg>
    )
  }
}

Edit.defaultProps = defaultProps
Edit.propTypes = propTypes

export default Edit
