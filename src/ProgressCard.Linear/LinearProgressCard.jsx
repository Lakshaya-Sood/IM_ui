import React from 'react'
import {Card, CardTitle, CardHeader, CardText} from 'material-ui/Card'
import LinearProgressRow from './LinearProgress'
import ErrorView from '../Missie'
import Spinner from '../Spinner'
import CardFooter from '../Card.Footer'
import _ from 'lodash'

function renderBody (bodyDef) {
  let body = []
  _.forEach(bodyDef, function (item) {
    body.push(
      <CardText>
        <LinearProgressRow subtitle={item.subtitle} value={item.value} title={item.title} color={item.fuiStyle} />
      </CardText>
       )
  })
  return body
}

function renderHelpText (helpText) {
  if (!helpText) return false
  return (
    <CardText className='text-muted'>
      {helpText || false}
    </CardText>
  )
}

export default class LinearProgressCard extends React.Component {
  renderContent () {
    const options = this.props.cardOptions
    if (options.error && options.error.hasError) {
      return <ErrorView messageText={options.error.message} />
    }
    if (_.isEmpty(options.bodyDef)) {
      return <Spinner />
    }
    return renderBody(options.bodyDef)
  }

  render () {
    const props = this.props
    const options = props.cardOptions

    return (
      <Card className='mdg-card-margin-bottom'>
        <CardTitle titleColor={'#666'}
          className='font-thin text-base' title={options.title} subtitle={options.subtitle || false} />
        {this.renderContent.call(this) }
        {renderHelpText(options.helpText) }
        <CardFooter footerDef={options.footerDef} />
      </Card>
    )
  }
}
