import React from 'react'
import VerifiedUser from 'material-ui/svg-icons/action/verified-user'
import { AppHeader } from 'ssp-ui'
import Table from '../src/Table'
import {Sidebar} from 'ssp-ui'
import {DialogCountrySelector} from 'ssp-ui'
function _getSidebar () {
  return <Sidebar />
}
const props = [
  {
    name: 'headerOptions',
    type: 'object',
    defaultValue: '',
    description: 'Object containing data for the header'
  }
]
const headerOptions = {
  productName: 'Digital Readiness',
  userIconTitle: 'James Watt',
  userIconSubtitle: 'Dusseldorf, Germany',
  userIcon: {
    dropdownContent: <div />
  },
  handleLogoClick: function () {
    alert('logo clicked')
  }
}

const headerOptionsWithSpecificLogo = {
  imageSrc: require('../assets/images/movie.png'),
  productName: 'Movie',
  userIconTitle: 'James Watt',
  userIconSubtitle: 'Dusseldorf, Germany',
  handleLogoClick: function () {
    alert('logo clicked')
  }
}

const headerOptionsWithCountry = {
  productName: 'Digital Readiness',
  userIconTitle: 'James Watt',
  userIconSubtitle: 'Dusseldorf, Germany',
  countryFlag: {
    countryCode: 'fr',
    countryLabel: 'ALEX',
    handleClick: function () {
      alert('clicked')
    }
  }
}
const countryList = ['tr', 'de', 'in', 'fr', 'pk', 'cz', 'it', 'nl', 'pl']
const countries = [
  {
    countryCode: 'tr',
    countryName: 'Turkey'
  },
  {
    countryCode: 'de',
    countryName: 'Germany'
  },
  {
    countryCode: 'in',
    countryName: 'India'
  },
  {
    countryCode: 'fr',
    countryName: 'France'
  },
  {
    countryCode: 'pk',
    countryName: 'Pakistan'
  },
  {
    countryCode: 'cz',
    countryName: 'Czech Republic'
  }
]
const AppHeaderDemo = React.createClass({
  getInitialState () {
    return {}
    this.getHeaderOptions = this.getHeaderOptions.bind(this)
    this.handleCountrySelect = this.handleCountrySelect.bind(this)
  },

  getHeaderOptions: function () {
    let self = this
    const headerOptions = {
      productName: 'Digital Readiness',
      userIconTitle: 'James Watt',
      userIconSubtitle: 'Dusseldorf, Germany',
      handleLogoClick: function () {
        alert('logo clicked')
      },
      countryFlag: {
        countryCode: 'tr',
        countryLabel: 'ALEX',
        handleClick: function () {
          self.refs['modal'].handleOpen()
        }
      }
    }
    return headerOptions
  },

  handleCountrySelect: function (country) {
    alert('you selected ' + country)
    this.refs['modal'].handleClose()
  },

  render: function () {
    return (
      <section>
        <h2 className='font-light'>AppHeader <small>Basic</small></h2>
        <br />
        <div className='row'>
          <div className='col-xs-12'>
            <AppHeader headerOptions={headerOptions} />
          </div>
        </div>
        <br />
        <h3 className='font-light'>Props <small /></h3>
        <br />
        <Table rows={props} />
        <br />

        <h2 className='font-light'>AppHeader <small>With project specific logo</small></h2>
        <br />
        <div className='row'>
          <div className='col-xs-12'>
            <AppHeader headerOptions={headerOptionsWithSpecificLogo} />
          </div>

        </div>
        <br />
        <h2 className='font-light'>AppHeader <small>With Hamburgermenu and clickable logo</small></h2>
        <br />
        <div className='row'>
          <div className='col-xs-12'>
            <AppHeader getSidebar={_getSidebar} headerOptions={headerOptions} />
          </div></div>
        <br />
        <h2 className='font-light'>AppHeader <small>With Country Flag and Country Selector</small></h2>
        <br />
        <div className='row'>
          <div className='col-xs-12'>
            <AppHeader headerOptions={this.getHeaderOptions()} />
          </div></div>
        <DialogCountrySelector ref='modal'
          title='Select Country'
          countryList={countries}
          defaultSelected={'de'}
          handleCountrySelect={this.handleCountrySelect}
          hideActions />
      </section>
    )
  }
})

export default AppHeaderDemo
