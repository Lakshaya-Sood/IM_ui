import React, {Component, PropTypes} from 'react'
// import {List, ListItem, makeSelectable} from 'material-ui/List';
// import Divider from 'material-ui/Divider';
// import Subheader from 'material-ui/Subheader';
import FuiForm from '../Form'
import BasicList from '../List.Basic'
import Dropdown from '../Input.Dropdown'

// import BasicSelectField from './SelectField.Basic'
const complexityOptions = [
    { title: 'High', value: 'high' },
    { title: 'Medium', value: 'medium' },
    { title: 'Low', value: 'low' },
    { title: 'Very Low', value: 'verylow' }
]

export class BasicListResponsive extends React.Component {
  getDropdownOptions () {
    var items = []
    for (let i = 0; i < this.props.listItems.length; i++) {
      var title = this.props.listItems[i].primaryText
      var value = this.props.listItems[i].key
      items.push({'title': title, 'value': value})
    }
    return items
  }

  onChange (value, event) {
    console.log('event value', event, value)
    this.props.onChange && this.props.onChange(event, value)
  }

  render () {
    const props = this.props
    var items = this.getDropdownOptions()
    return (
      <div>
        {/* <div className='hidden-xs'> */}
        <div className={props.basicListClass || 'hidden-xs'}>
          <BasicList {...props} />
        </div>
        {/* <div className='hidden-lg hidden-md hidden-sm'> */}
        <div className={props.dropdownClass || 'hidden-lg hidden-md hidden-sm'} style={{height: '70px'}}>
          <FuiForm>
            <Dropdown options={items} value={props.defaultSelected} {...props} onChange={this.onChange.bind(this)} />
          </FuiForm>
        </div>
      </div>
    )
  }
}
export default BasicListResponsive
