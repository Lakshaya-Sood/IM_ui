import React from 'react'
import {Tile} from 'ssp-ui'

const TileDemo = () => {
  return (
    <section>
      <h2 className='font-light'>Tiles <small>Comes in many colors</small></h2>
      <div className='row'>
        <div className='col-md-4'>
          <div className='row '>
            <div className='col-xs-6'>
              <Tile value={23} fuiStyle='default' subtitle='Comments' />
            </div>
            <div className='col-xs-6'>
              <Tile value={10} fuiStyle='info' subtitle='New Items' />
            </div>
          </div>

          <div className='row'>
            <div className='col-xs-6'>
              <Tile value={23} fuiStyle='danger' subtitle='Issues' />
            </div>
            <div className='col-xs-6'>
              <Tile value={10} fuiStyle='success' subtitle='New Items' />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default TileDemo
