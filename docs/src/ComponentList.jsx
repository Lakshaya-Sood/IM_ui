import React from 'react'
import { Link } from 'react-router'
import {BasicListResponsive, BasicList} from 'ssp-ui'
import TextField from 'material-ui/TextField'
import Subheader from 'material-ui/Subheader'
import _ from 'lodash'

const listDef = [
  {
    key: 'Home',
    primaryText: 'All Components'
  },
  {
    key: 'Alerts',
    primaryText: 'Alerts'
  },
  {
    key: 'SnackBar',
    primaryText: 'SnackBar'
  },
  {
    key: 'TabsExample',
    primaryText: 'TabsExample'
  },
  {
    key: 'Charts',
    primaryText: 'Charts'
  },
  {
    key: 'UserIconExample',
    primaryText: 'UserIconExample'
  },
  {
    key: 'CountryFlag',
    primaryText: 'CountryFlag'
  },
  {
    key: 'Forms',
    primaryText: 'Forms'
  },
  {
    key: 'AppHeader',
    primaryText: 'AppHeader'
  },
  {
    key: 'AppHeaderSecondary',
    primaryText: 'AppHeaderSecondary'
  },
  {
    key: 'Autocomplete',
    primaryText: 'Autocomplete'
  },
  {
    key: 'Cards',
    primaryText: 'Cards'
  },
  {
    key: 'Buttons',
    primaryText: 'Buttons'
  },
  {
    key: 'Sidebar',
    primaryText: 'Sidebar'
  },
  {
    key: 'Tile',
    primaryText: 'Tile'
  },
  {
    key: 'Cracker',
    primaryText: 'Cracker'
  },
  {
    key: 'CircularProgressCard',
    primaryText: 'CircularProgressCard'
  },
  {
    key: 'LinearProgressCard',
    primaryText: 'LinearProgressCard'
  },
  {
    key: 'Wafer',
    primaryText: 'Wafer'
  },
  {
    key: 'Waffle',
    primaryText: 'Waffle'
  },
  {
    key: 'Form',
    primaryText: 'Form'
  },
  {
    key: 'ToggleSwitch',
    primaryText: 'ToggleSwitch'
  },
  {
    key: 'Modals',
    primaryText: 'Modals'
  },
  {
    key: 'Notifications',
    primaryText: 'Notifications'
  },
  {
    key: 'PanelExample',
    primaryText: 'PanelExample'
  },
  {
    key: 'Lists',
    primaryText: 'Lists'
  },
  {
    key: 'Table',
    primaryText: 'Table'
  }
]

export class ComponentList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: ''
    }
    this.handleSearch = this.handleSearch.bind(this)
  }
  handleSearch (e, v) {
    this.setState({
      search: v
    })
  }

  render () {
    let items = listDef
    if (this.state.search) {
      items = items.filter(item => { return item.primaryText.toLowerCase().includes(this.state.search.toLowerCase()) })
    }
    return (
      <div className='row' style={{
        'position': 'fixed',
        'width': '20%'}}>
        <TextField
          hintText='Search Components' onChange={this.handleSearch.bind(this)} style={{'width': '100%'}}
        />
        <BasicList
          title='Components'
          name='Components'
          listItems={items}
          defaultSelected={this.props.defaultSelected}
          onChange={this.props.onChange}
          disableTouchRipple
          disableFocusRipple
          style={{'height': '650px',
            'overflowY': 'auto',
            'position': 'fixed',
            'width': '20%'}}
          />
      </div>
    )
  }
}
export default ComponentList
