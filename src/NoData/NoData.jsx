import React from 'react'

class NoData extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    let message = this.props.message || 'No data found.'
    return (
      <div className='text-center card-block no-borders'>
        <div className='text-muted font-thin' style={{lineHeight: '15rem', fontSize: '16px'}}>{message}</div>
      </div>
    )
  }
}

export default NoData
