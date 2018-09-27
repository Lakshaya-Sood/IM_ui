import React, {PropTypes} from 'react'
import {Card, CardText} from 'material-ui/Card'
import {getTileStyle} from '../zutils/Stylist'
// todo: allow children render

const propTypes = {
  fuiStyle: PropTypes.string,
  subtitle: React.PropTypes.string,
  value: React.PropTypes.string
}

const defaultProps = {
  fuiStyle: 'primary',
  subtitle: '',
  value: 0
}

class Tile extends React.Component {
  render () {
    let props = this.props
    let style = getTileStyle(props.fuiStyle)

    return (
      <Card className={style}>
        <CardText>
          <div className='title'><h1 className='m-t-0 font-light'> {props.value}</h1> </div>
          <div className='card-text'>{props.subtitle}</div>
        </CardText>
      </Card>
    )
  }
}

Tile.propTypes = propTypes
Tile.defaultProps = defaultProps
export default Tile
