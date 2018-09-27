import React from 'react'
import ComponentList from './ComponentList'
import ComponentDetails from './ComponentDetails'

class DevkitLayout extends React.Component {
  shouldComponentUpdate () {
    return false
  }
  render () {
    return (
      <div>
        <h2 className='text-center'>
        Awww yeah!! ssp-ui v1 is coming :-)
      </h2>
        <ComponentDetails />
      </div>
    )
  }
}

export default DevkitLayout
