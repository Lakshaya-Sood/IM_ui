import React from 'react'
import Buttons from '../examples/Buttons'
// import Cards from '../examples/Cards'
import CountryFlag from '../examples/CountryFlag'
import Chip from '../examples/Chip'
import Modals from '../examples/Modals'
import AppHeader from '../examples/AppHeader'
import Heather from '../examples/AppHeader.Heather'
import Autocomplete from '../examples/Autocomplete'
import BasicList from '../examples/BasicList'
import BasicListResponsive from '../examples/BasicListResponsive'
import AppHeaderSecondary from '../examples/AppHeaderSecondary'
import AppHeaderEmployee from '../examples/AppHeaderEmployee'
import CircularProgressCard from '../examples/CircularProgressCard'
import LinearProgressCard from '../examples/LinearProgressCard'
// import Tile from '../examples/Tile'
import TabsExample from '../examples/TabsExample'
import PanelExample from '../examples/PanelExample'
import Sidebar from '../examples/Sidebar'
import Sidney from '../examples/Sidebar.Sidney'
import SnackBar from '../examples/SnackBar'
import Form from '../examples/Form'
import Footer from '../examples/Footer'

const root = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around'
}

var ComponentDetails = React.createClass({
  render: function () {
    return (
      <div>
        <Home />
      </div>
    )
  }
})
export default ComponentDetails

const Home = () => (
  <div key='devkit'>
    <Heather />
    <br />
    <Footer />
    <br />
    <AppHeader />
    <br />
    <AppHeaderSecondary />
    <br />
    <AppHeaderEmployee />
    <br />
    <Buttons />
    
    <TabsExample />
    <br />
    <Chip/>
    <br />
    <CountryFlag />
    <br />
    <Autocomplete />
    <br />
    {/* <Cards /> */}
    <br />
    <Sidebar />
    <br />
    <Sidney />
    <br />
    {/* <Tile /> */}

    <CircularProgressCard />
    <LinearProgressCard />
    <SnackBar />

    <Form />
    <Modals />
    <PanelExample />
    <div>
      <h2 className='font-thin'>List <small>Selectable List</small></h2>
      <BasicList />
      <h2 className='font-thin'>Responsive List <small>List that changes into dropdown on change in screen size</small></h2>
      <BasicListResponsive />
    </div>

  </div>
)
