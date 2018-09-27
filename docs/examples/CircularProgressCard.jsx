import React from 'react'
import {CircularProgressCard} from 'ssp-ui'

const cardOptions = {
  title: 'Translation Report',
  subtitle: '',
  bodyDef: {
    value: 30
  },
  footerDef: [
    {
      title: 'Allocated',
      value: 100,
      fuiStyle: 'info'
    },
    {
      title: 'Used',
      value: 50,
      fuiStyle: 'success'
    },
    {
      title: 'Rejected',
      value: 20,
      fuiStyle: 'danger'
    },
    {
      title: 'Recycled',
      value: 30,
      fuiStyle: 'warning'
    }
  ],
  helpText: 'Some additional information about the data shown in the widget.'
}
const cardOptionsNoFooter = {
  title: 'Translation Report',
  subtitle: '',
  bodyDef: {
    value: 100
  },
  footerDef: [
  ],
  helpText: 'Dont need the footer? It can be removed very easily :)'
}
const cardOptionsLoading = {
  title: 'Translation Report',
  subtitle: '',
  bodyDef: {
  },
  error: {
  },
  footerDef: [
    {
      title: 'Allocated',
      value: 0,
      fuiStyle: 'info'
    },
    {
      title: 'Used',
      value: 0,
      fuiStyle: 'success'
    },
    {
      title: 'Rejected',
      value: 0,
      fuiStyle: 'danger'
    },
    {
      title: 'Recycled',
      value: 0,
      fuiStyle: 'warning'
    }
  ],
  helpText: 'Some additional information about the data shown in the widget.'
}

const cardOptionsError = {
  title: 'Translation Report',
  subtitle: '',
  bodyDef: {
  },
  error: {
    hasError: true,
    errorMsg: ''
  },
  footerDef: [
    {
      title: 'Allocated',
      value: 0,
      fuiStyle: 'info'
    },
    {
      title: 'Used',
      value: 0,
      fuiStyle: 'success'
    },
    {
      title: 'Rejected',
      value: 0,
      fuiStyle: 'danger'
    },
    {
      title: 'Recycled',
      value: 0,
      fuiStyle: 'warning'
    }
  ],
  helpText: 'Some additional information about the data shown in the widget.'
}
const CircularProgressCardDemo = () => {
  return (
    <section>
      <h2 className='font-light'>Circular Progress Cards <small>Variants</small></h2>
      <div className='row'>
        <div className='col-md-6'>
          <CircularProgressCard title='Loading Statue' error subtitle=''
            cardOptions={cardOptionsLoading} />
        </div>

        <div className='col-md-6'>
          <CircularProgressCard title='Error State' error subtitle=''
            cardOptions={cardOptionsError} />
        </div>
      </div>

      <div className='row'>
        <div className='col-md-6'>
          <CircularProgressCard title='Country Progress' subtitle=''
            cardOptions={cardOptions} />
        </div>

        <div className='col-md-6'>
          <CircularProgressCard title='Country Progress' subtitle=''
            cardOptions={cardOptionsNoFooter} />
        </div>
      </div>
    </section>
  )
}

export default CircularProgressCardDemo
