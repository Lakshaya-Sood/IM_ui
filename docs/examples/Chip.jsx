import React from 'react'
import {Chip} from 'ssp-ui'
const   wrapper = {
  display: 'flex',
  flexWrap: 'wrap'
}
function handleClick () {
  alert('clicked')
}
const ChipExample = () => {
  return (
    <section>
      <h2 className='font-thin'>Chips</h2>
      <div style={wrapper}>
        <Chip onClick={handleClick}>Germany</Chip>
        <Chip onClick={handleClick} onRequestDelete={() => {alert('delete')}}>France</Chip>
        <Chip fuiStyle='primary' onClick={handleClick} onRequestDelete={() => {alert('delete')}}>France</Chip>
      </div>
    </section>
  )
}

export default ChipExample
