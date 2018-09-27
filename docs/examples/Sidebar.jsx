import React from 'react'
import {Sidebar} from 'ssp-ui'
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
const SidebarDemo = () => {
  return (
    <section>
      <h2 className='font-light'>Sidebar <small>AKA Hamburger menu!</small></h2>
      <div className='row'>
        <Sidebar>
          {getSidebarContent()}
        </Sidebar>
      </div>
    </section>
  )
}

export default SidebarDemo
