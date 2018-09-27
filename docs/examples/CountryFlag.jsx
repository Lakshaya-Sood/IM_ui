import React from 'react'
import {CountryFlag} from 'ssp-ui'

function handleClick () {
  alert('clicked')
}
const CountryFlagExample = () => {
  return (
    <section>
      <h2 className='font-thin'>Country Flags</h2>
      <CountryFlag countryCode='de' title='Germany' handleClick={handleClick} />
            &nbsp;&nbsp;
      <CountryFlag countryCode='fr' title='France' />
            &nbsp;&nbsp;
      <CountryFlag countryCode='in' title='India' />
    </section>
  )
}

export default CountryFlagExample
