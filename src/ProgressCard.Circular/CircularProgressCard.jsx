import React from 'react'
import {Card, CardTitle, CardActions, CardHeader, CardText} from 'material-ui/Card'
import ErrorView from '../Missie'
import Spinner from '../Spinner'
import CardFooter from '../Card.Footer'
import _ from 'lodash'

function renderHelpText (helpText) {
  if (!helpText) return false
  return (
    <CardText className='text-muted'>
      {helpText || false}
    </CardText>
  )
}

class CircularProgressCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.renderContent = this.renderContent.bind(this)
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  renderContent () {
    const options = this.props.cardOptions
    if (options.error && options.error.hasError) {
      return <ErrorView />
    }
    if (_.isEmpty(options.bodyDef)) {
      return <Spinner />
    }
    return <Circle value={options.bodyDef.value} success title='Country Progress' />
  }

  render () {
    let props = this.props
    return (
      <Card className='m-b-75'>
        <CardTitle titleColor={'#666'}
          className='font-thin text-base' title={props.title} subtitle={props.subtitle || ''} />
        <CardText>
          {this.renderContent()}
        </CardText>
        {renderHelpText(props.cardOptions.helpText)}
        <CardFooter footerDef={props.cardOptions.footerDef} />
      </Card>
    )
  }
}

import CircularProgress from 'material-ui/CircularProgress'

class Circle extends React.Component {
  render () {
    let props = this.props

    let color = null
    props.success && (color = '#36a372')
    props.danger && (color = '#dd4343')
    props.warning && (color = '#fd9c35')

    return (
      <div className='text-center'>
        <CircularProgress color={color} mode='determinate' value={props.value} size={80} thickness={7} />
        <div className=' text-muted text-center'>{props.title}
          <span style={{ color: color }}> {props.value}%</span>
        </div>
      </div>
    )
  }
}

// CircularProgressCard.propTypes = propTypes;
// CircularProgressCard.defaultProps = defaultProps;

export default CircularProgressCard
