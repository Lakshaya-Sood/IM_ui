import React from 'react'
import {BasicList} from 'ssp-ui'

import Subheader from 'material-ui/Subheader'

const listDef = [
  {
    key: 'assortment',
    primaryText: 'Assortment'
  },
  {
    key: 'informationTechnology',
    primaryText: 'Information Technology'
  },
  {
    key: 'payment',
    primaryText: 'Payment'
  },
  {
    key: 'solution',
    primaryText: 'Solution'
  },
  {
    key: 'transport',
    primaryText: 'Transport'
  }
]

export class BasicListExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      defaultSelected: 'informationTechnology'
    }
    this.onchange = this.onchange.bind(this)
  }

  onchange (event, key) {
    alert('selected item ==>' + key)
    this.setState({
      defaultSelected: key
    })
  }

  render () {
    return (
      <div className='row'>
        <div className='col-xs-3'>
          <BasicList
            title='Categories'
            listItems={listDef}
            defaultSelected={this.state.defaultSelected}
            onChange={this.onchange}
            disableTouchRipple
            disableFocusRipple
          />
        </div></div>
    )
  }
}
export default BasicListExample
