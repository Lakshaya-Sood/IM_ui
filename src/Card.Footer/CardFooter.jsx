import React, {PropTypes} from 'react'
import {Card, CardText} from 'material-ui/Card'
import _ from 'lodash'
import {getCardFooterItemStyle} from '../zutils/Stylist'

const propTypes = {
}

const defaultProps = {
}

function renderFooter (footerDefs) {
  let footer = []

  if (!footerDefs || _.isEmpty(footerDefs)) return false

  _.forEach(footerDefs, function (item) {
    const itemStyle = getCardFooterItemStyle(item.fuiStyle)
    footer.push(
      <div className='text-group-item'>
        <div><h3 className={itemStyle}>{item.value}</h3> </div>
        <div className='text-muted'>{item.title}</div>
      </div>
        )
  })

  return (
    <div className='text-group'>
      {footer}
    </div>
  )
}

class CardFooter extends React.Component {
  renderContent () {
    const props = this.props
    if (props.children) {
      return props.children
    }
    return renderFooter(props.footerDef)
  }

  render () {
    const props = this.props

    if (!props.footerDef || _.isEmpty(props.footerDef)) {
      return null
    }

    return (
      <CardText className='text-center card-footer'>
        {this.renderContent.call(this)}
      </CardText>
    )
  }
}

CardFooter.propTypes = propTypes
CardFooter.defaultProps = defaultProps

export default CardFooter
