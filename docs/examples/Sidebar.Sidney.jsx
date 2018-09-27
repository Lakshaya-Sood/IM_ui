import React from 'react'
import {Sidney, SidneyOption, Sidelle, SidelleOption, Sam, SamOption} from 'ssp-ui'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import Table from '../src/Table'
import AllApps from '../../src/svg-icons/AllApps'
import ChevronLeft from '../../src/svg-icons/ChevronLeft'

const props = [
  {
    name: 'onLogoClick',
    type: 'func',
    defaultValue: '',
    description: 'Callback fired when menu icon receives a click'
  },
  {
    name: 'onUserProfileClick',
    type: 'func',
    defaultValue: '',
    description: 'Callback fired when user profile icon receives a click'
  },
  {
    name: 'onExpandClick',
    type: 'func',
    defaultValue: '',
    description: 'Callback fired when expand/collapse icon receives a click'
  },
  {
    name: 'notificationCount',
    type: 'number',
    defaultValue: 0,
    description: 'Notification count to be shown in the badge'
  },
  {
    name: 'appVersion',
    type: 'string',
    defaultValue: '',
    description: 'Application version displayed at the bottom'
  }
]

export default class Sidebars extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sameOpen: false
    }
  }

  handleAlarmClick (e) {
    this.setState({sameOpen: false})
  }

  handleExpandClick (e) {
    this.setState({sameOpen: !this.state.sameOpen})
  }

  render () {
    return (
      <section >
        <h2>Sidney <small>A sticky sidebar for employee facing apps</small></h2>
        <br />
        <br />
        <div style={{height: '600px', position: 'relative'}}>
          <Sidney
            expand={this.state.sameOpen}
            onLogoClick={() => { alert('Go to home page') }}
            onUserProfileClick={() => { this.refs['drawer-user-profile'].handleToggle() }}
            onExpandClick={this.handleExpandClick.bind(this)}
            appVersion='v1.0.0'>
            <SidneyOption selected icon={<AllApps />} label='Components' />
            <SidneyOption icon={<AllApps />} label='Components' />
          </Sidney>

          <Sidelle ref='drawer-user-profile'
            containerStyle={{left: '80px'}}
            title='Notifications'>
            <SidelleOption
              onClick={() => { alert('You see. Things work out this way.') }}
              rightIcon={<AllApps fill='#0064FE' />}
              leftIcon={<ChevronLeft fill='#0064FE' />}
              label='Components' />
          </Sidelle>

        </div>
        <br />
        <h3 className='font-light'>Props <small /></h3>
        <br />
        <Table rows={props} />
        <br />
        <br />
        <h2>Sidelle <small>Drawer space for notifications, user profile and more</small></h2>
                    Click on the user profile icon of Sidney
            </section>
    )
  }
}
