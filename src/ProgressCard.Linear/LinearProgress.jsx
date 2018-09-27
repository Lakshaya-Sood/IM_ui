import React from 'react'
import LinearProgress from 'material-ui/LinearProgress'

export default class Line extends React.Component {
  render () {
    let props = this.props

    let color = null
    props.color === 'success' && (color = '#36a372')
    props.color === 'error' && (color = '#dd4343')
    props.color === 'warning' && (color = '#fd9c35')

    return (
      <div>
        <div className='margin-bottom-75 text-muted'>{props.title}
          <span className='pull-right' style={{color: color}}>{props.subtitle || props.value}</span>
        </div>
        <LinearProgress color={color} style={{height: 8 + 'px', borderRadius: 4 + 'px'}}
          mode='determinate' value={props.value} />
      </div>
    )
  }
}
