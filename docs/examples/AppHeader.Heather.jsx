import React from 'react'
import { Heather } from 'ssp-ui'
import Table from '../src/Table'

const props = [
  {
    name: 'isMenuOpen',
    type: 'bool',
    defaultValue: 'false',
    description: 'Controls whether the menu icon or close icon is shown'
  },
  {
    name: 'onMenuClick',
    type: 'func',
    defaultValue: '',
    description: 'Callback fired when menu icon receives a click'
  },
  {
    name: 'onLogoClick',
    type: 'func',
    defaultValue: '',
    description: 'Callback fired when logo receives a click'
  },
  {
    name: 'onUserProfileClick',
    type: 'func',
    defaultValue: '',
    description: 'Callback fired when user profile icon receives a click'
  },
  {
    name: 'notificationCount',
    type: 'number',
    defaultValue: '0',
    description: 'Count displayed on counter on top of user profile icon'
  }
]

class AppHeaderDemo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isMenuOpen: false
    }
  }

  render () {
    return (
      <div>
        <h2 className='font-light'>Heather <small className='font-light'>Application Header for tab and mobile views</small></h2>
        <br />
        <div className='row'>
          <div className='col-xs-6'>
            <Heather
              notificationCount={17}
              isMenuOpen={this.state.isMenuOpen}
              onMenuClick={() => { this.setState({isMenuOpen: !this.state.isMenuOpen}) }}
              onLogoClick={() => { alert('Yes!! Click works on logo :-)') }}
              onUserProfileClick={() => { alert('Yes!! Click works on profile') }} />
          </div>
        </div>
        <br />
        <h3 className='font-light'>Usage <small /></h3>
        <br />
        <pre style={{fontSize: '16px'}}>
          <code className='language-jsx'>
            {`
              <Heather
                notificationCount={17}
                isMenuOpen={this.state.isMenuOpen}
                onMenuClick={()=>{this.setState({isMenuOpen: !this.state.isMenuOpen})}}
                onLogoClick={()=>{alert('Yes!! Click works on logo :-)')}}
                onUserProfileClick={()=>{alert('Yes!! Click works on profile')}}/>
              `}
          </code>
        </pre>
        <br />
        <h3 className='font-light'>Props <small /></h3>
        <br />
        <Table rows={props} />
        <br />
      </div>
    )
  }
}

export default AppHeaderDemo
