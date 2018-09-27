import React, {PropTypes} from 'react'
import {Card, CardText} from 'material-ui/Card'
import VerifiedUser from 'material-ui/svg-icons/action/verified-user'
import {getCrackerStyle} from '../zutils/Stylist'
// todo take icon from caller

const propTypes = {
  fuiStyle: PropTypes.string,
  value: React.PropTypes.number,
  title: React.PropTypes.string,
  subTitle: React.PropTypes.string
}

const defaultProps = {
  fuiStyle: 'primary',
  value: 0,
  title: '',
  subTitle: ''
}

class Cracker extends React.Component {
  render () {
    let props = this.props
    let style = getCrackerStyle(props.fuiStyle)

    return (
      <Card className={style}>
        <CardText>
          <VerifiedUser className='text-white-base' style={{ height: '60px', width: '60px' }} />
          <h1 className='text-white-base font-light'>{props.value}</h1>
          <h3 className='font-thin text-white-base no-margins'>
            {props.title}
          </h3>
          <span className='text-white-base'>{props.subTitle}</span>
        </CardText>
      </Card>
    )
  }
}

Cracker.propTypes = propTypes
Cracker.defaultProps = defaultProps

export default Cracker
