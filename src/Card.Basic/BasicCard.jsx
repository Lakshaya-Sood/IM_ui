import React from 'react'
import {Card, CardTitle, CardActions, CardHeader, CardText} from 'material-ui/Card'
import ErrorView from '../Missie'
import Spinner from '../Spinner'
import CardFooter from '../Card.Footer'
import _ from 'lodash'
import NoData from '../NoData'

function renderHelpText (helpText) {
  if (!helpText) return false
  return (
    <CardText className='text-muted'>
      {helpText || false}
    </CardText>
  )
}

class BasicCard extends React.Component {
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
    if (!options.bodyDef) {
      return <NoData />
    }
    if (_.isEmpty(options.bodyDef)) {
      return <Spinner />
    }
    return (
      <CardText>
        {this.props.children}
      </CardText>
    )
  }

  render () {
    let props = this.props
    return (
      <Card className='m-b-75' style={props.style}>
        <CardTitle titleColor={'#666'} titleStyle={{fontSize: '18px', lineHeight: '24px'}}
          className='font-thin text-base' title={props.title} subtitle={props.subtitle || ''} />

        {this.renderContent()}

        {renderHelpText(props.cardOptions.helpText)}
        <CardFooter footerDef={props.cardOptions.footerDef} />
      </Card>
    )
  }
}

export default BasicCard
