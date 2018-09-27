import React from 'react'
import {Panel} from 'ssp-ui'

const PanelExample = () => {
  return (
    <section>
      <h2 className='font-light'>Panels <small>A monochrome panel group</small></h2>
      <div className='row'>
        <div className='col-xs-8'>
          <Panel title='Running Interfaces (5)' fuiStyle='info'>
                        Item1
                        Item2
                    </Panel>
        </div>
        <div className='col-xs-8'>
          <Panel title='Deprecated Interfaces (4)' fuiStyle='info'>
                        Item1
                        Item2
                    </Panel>
        </div>
        <div className='col-xs-8'>
          <Panel title='Upcoming Interfaces (10)' fuiStyle='info'>
                        Item1
                        Item2
                    </Panel>
        </div>
      </div>

      <h2 className='font-light'><small>Colorful panel group</small></h2>
      <div className='row'>
        <div className='col-xs-8'>
          <Panel title='Successful Interfaces (5)' fuiStyle='success'>
                        Item1
                        Item2
                    </Panel>
        </div>
        <div className='col-xs-8'>
          <Panel title='Failed Interfaces (5)' fuiStyle='danger'>
                        Item1
                        Item2
                    </Panel>
        </div>
        <div className='col-xs-8'>
          <Panel title='Deprecated Interfaces (4)' fuiStyle='warning'>
                        Item1
                        Item2
                    </Panel>
        </div>
      </div>
    </section>
  )
}

export default PanelExample
