import React from 'react'
import {Tabs} from 'ssp-ui'
const tabDefs = [
  {
    key: 'latest',
    label: 'Latest',
    content: <div className='text-center'>Showing Latest Data</div>
  },
  {
    key: 'historical',
    label: 'Historical',
    content: <div className='text-center'>Showing historical Data</div>
  },
  {
    key: 'future',
    label: 'future',
    content: <div className='text-center'>Showing future Data</div>
  }
]

function handleChange (selectedTab) {
  alert('selectedTab ' + selectedTab)
}

const TabsExample = () => {
  return (
    <section>
      <h2 className='font-light'>Tabs <small /></h2>
      <p className='font-light text-muted'>
              Tabs take a tab definition object and a callback function. The tab
              content can be given in the tab definition or you can render tab content based on the selected tab.
            </p>
      <div className='card card-block'>
        <Tabs tabDefs={tabDefs} onChange={handleChange}/>
      </div>
    </section>
  )
}

export default TabsExample
