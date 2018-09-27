import React from 'react'
import {AppHeaderSecondary, Tabs} from 'ssp-ui'

const headerDefs = [
  {
    key: 'dashboard',
    label: 'Dashboard',
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
    label: 'Issue Summary',
    title: 'Issue Summary',
    desc: 'Issue summary tab',
    path: '/issuesummary',
    permissions: [],
    toggleKey: null,
    solutions: ['alex'],
    features: [],
    isHidden: false,
    isDisabled: false,
    activeKey: 'issuesummary',
    href: '#'
  },
  {
    key: 'createnewissue',
    label: 'Create New',
    title: 'Create New',
    desc: 'Create issue tab',
    path: '/createnewissue',
    permissions: [],
    toggleKey: null,
    solutions: ['alex'],
    features: [],
    isHidden: false,
    isDisabled: true,
    activeKey: 'createnewissue',
    href: '#'
  }
]

const AppHeaderDemo = React.createClass({
  getInitialState: function () {
    return { activeKey: 'issuesummary'}
  },

  handleClick: function (option) {
    this.setState({ activeKey: option.key })
  },

  render: function () {
    return (
      <section>
        <h2 className='font-light'>Secondary AppHeader <small /></h2>
        <br />
        <div className='row'>
          <div className='col-xs-12'>
            <AppHeaderSecondary
              headerDefs={headerDefs}
              activeKey={this.state.activeKey}
              onChange={this.handleClick} />
          </div>
        </div>
      </section>
    )
  }
})

export default AppHeaderDemo
