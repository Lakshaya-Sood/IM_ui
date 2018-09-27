import React from 'react'
import Close from '../../src/svg-icons/Close'
import AllApps from '../../src/svg-icons/AllApps'
import Back from '../../src/svg-icons/Back'
import ArrowLeft from '../../src/svg-icons/ArrowLeft'
import ChevronLeft from '../../src/svg-icons/ChevronLeft'
import Settings from '../../src/svg-icons/Settings'
import Logout from '../../src/svg-icons/Logout'
import Menu from '../../src/svg-icons/Menu'
import MyApps from '../../src/svg-icons/MyApps'
import Notification from '../../src/svg-icons/Notification'
import Profile from '../../src/svg-icons/Profile'
import RegisterApp from '../../src/svg-icons/RegisterApp'
import Trash from '../../src/svg-icons/Trash'
import Edit from '../../src/svg-icons/Edit'
import Metro from '../../src/svg-icons/Metro'
import MetroUnited from '../../src/svg-icons/MetroUnited'
import MetroUnitedInverted from '../../src/svg-icons/MetroUnitedInverted'
import MUnitedInverted from '../../src/svg-icons/MUnitedInverted'
import MUnited from '../../src/svg-icons/MUnited'
import Plus from '../../src/svg-icons/Plus'
import Reload from '../../src/svg-icons/Reload'
import Help from '../../src/svg-icons/Help'
import Globus from '../../src/svg-icons/Globus'
import Cockpit from '../../src/svg-icons/Cockpit'

class IconsExample extends React.Component {
  render () {
    return (
      <div>
        <h2 className='font-light'>SVG Icons <small className='font-light' /></h2>
        <br />
        
        <div>
          <div style={{display: 'inline-block', margin: '4px', width: '32px', height: '32px'}}>
            <Globus fill='#0064FE' />
          </div>
          <div style={{display: 'inline-block', margin: '4px', width: '32px', height: '32px'}}>
            <Help fill='#0064FE' />
          </div>
          <div style={{display: 'inline-block', margin: '4px', width: '80px', height: '80px'}}>
            <Cockpit fill='#0064FE' />
          </div>
        </div>
        
        <div className='row'>

          <div className='col-xs-1 text-center'>
            <Close fill='#2BC180' />
                  Close
                </div>
          <div className='col-xs-1 text-center'>
            <AllApps fill='#0064FE' />
                  Apps
                </div>
          <div className='col-xs-1 text-center'>
            <Menu fill='#2BC180' />
                  Menu
                </div>
          <div className='col-xs-1'>
            <MyApps fill='#0064FE' />
          </div>

          <div className='col-xs-1 text-center'>
            <Notification fill='#E03305' />
                  Notificaion
                </div>
          <div className='col-xs-1'>
            <Profile fill='#0064FE' />
          </div>
          <div className='col-xs-1'>
            <RegisterApp fill='#0064FE' />
          </div>
          <div className='col-xs-1'>
            <Settings fill='#0064FE' />
          </div>
          <div className='col-xs-1'>
            <ArrowLeft fill='#0064FE' />
          </div>
          <div className='col-xs-1'>
            <ChevronLeft fill='#0064FE' />
          </div>
          <div className='col-xs-1'>
            <Logout fill='#0064FE' />
          </div>
          <div className='col-xs-1'>
            <Trash fill='#0064FE' />
          </div>
          <div className='col-xs-1'>
            <Edit fill='#0064FE' />
          </div>
          <div className='col-xs-1'>
            <Plus fill='#0064FE' />
          </div>
          <div className='col-xs-1'>
            <Back fill='#0064FE' />
          </div>
          <div className='col-xs-1'>
            <Reload fill='#0064FE' />
          </div>
          <div className='col-xs-1'>
            <MUnitedInverted />
          </div>
          <div className='col-xs-1'>
            <MUnited />
          </div>

        </div>
        <div className='row'>
          <div className='col-xs-4 text-center'>
            <div style={{width: '176px', height: '22px'}} >
              <MetroUnited />
            </div>
          </div>
          <div className='col-xs-4 text-center'>
            <div style={{width: '176px', height: '22px'}} >
              <MetroUnitedInverted />
            </div>
          </div>
          <div className='col-xs-4 text-center'>
            <div style={{width: '176px', height: '22px'}} >
              <Metro />
            </div>

          </div>
        </div>
        <br />

        <br />
        <br />
      </div>
    )
  }
}

export default IconsExample
