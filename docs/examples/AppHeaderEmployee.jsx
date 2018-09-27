import React from 'react'
import {AppHeaderEmployee} from 'ssp-ui'

const headerDefs = [
  {
    key: 'dashboard',
    title: 'Dashboard', // this will be shown in the UI
    desc: 'Dashboard tab', // brief desc about the menu item
    path: '/dashboard', // go to this path when menu item is clicked
    permissions: [], // permission names to which this item is visible
    toggleKey: null, // featuretogglekey
    solutions: [], // solutions to which this menu item is visible
    features: [], // features to which this menu item is visible
    isHidden: true, // is hidden ?
    isDisabled: false, // is disabled ?
    activeKey: 'dashboard',
    href: '#'
  },
  {
    key: 'issuesummary',
    title: 'Issue Summary',
    desc: 'Issue summary tab',
    path: '/issuesummary',
    permissions: [],
    toggleKey: null,
    href: '#'
  },
  {
    key: 'createnewissue',
    title: 'Create New',
    desc: 'Create issue tab',
    path: '/createnewissue',
    permissions: [],
    toggleKey: null,
    href: '#'
  }
]

const headerOptions = {
  handleLogoClick: function () {
    alert('logo clicked')
  },
  headerDefs: headerDefs
}

const AppHeaderDemo = React.createClass({
  getInitialState: function () {
    return { activeKey: 'issuesummary'}
  },

  handleClick: function (option) {
    this.setState({ activeKey: option.key })
  },

  render: function () {
    return null
    // this component will be deprecated soon
    return (
      <section>
        <h2 className='font-light'>Application Header <small>For Employee Facing apps</small></h2>
        <br />
        <div className='row'>
          <div className='col-xs-12'>
            <AppHeaderEmployee
              headerOptions={headerOptions}
              activeKey={this.state.activeKey}
              onClick={this.handleClick} />
          </div>
        </div>
      </section>
    )
  }
})

export default AppHeaderDemo
