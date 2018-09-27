import React from 'react'
import {SidebarEmployeeFacing} from 'ssp-ui'
import { Link } from 'react-router'
import {List, ListItem} from 'material-ui/List'
import ActionInfo from 'material-ui/svg-icons/action/info'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'

function getSidebarContent () {
  return (
    <List>
      <Link to='/styleguide'>
        <ListItem className='text-white-base' primaryText='Style Guide' />
      </Link>

      <ListItem className='text-white-base'
        primaryText='Components' rightIcon={<NavigationExpandMoreIcon className='app-header-menu-icon' />} />
      <List style={{ paddingLeft: 20 + 'px' }}>
        <Link to='/home/developerkit'>
          <ListItem className='text-white-base' primaryText='All' rightIcon={<ActionInfo />} />
        </Link>
        <ListItem className='text-white-base' primaryText='Charts' rightIcon={<ActionInfo />} />
        <ListItem className='text-white-base' primaryText='Data Grid' rightIcon={<ActionInfo />} />
        <ListItem className='text-white-base' primaryText='Widgets' rightIcon={<ActionInfo />} />
      </List>
    </List>
  )
}
const sidebarOptions = {
  productName: 'Digital Readiness',
  userIconTitle: 'James Watt',
  userIconSubtitle: 'Dusseldorf, Germany',
  userIcon: {
  },
  onRequestChange: function () {
    alert('logo clicked')
  },
  notification: {
    count: '0'
  }
}

const SidebarDemo = () => {
  return (
    <section>
      <h2 className='font-light'>Employee Facing Sidebar</h2>
      <div className='row'>
        <SidebarEmployeeFacing sidebarOptions={sidebarOptions} />
      </div>
    </section>
  )
}

export default SidebarDemo
