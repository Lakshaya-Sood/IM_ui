import React from 'react'
import {LinearProgressCard} from 'ssp-ui'
const singleProgress = {
  title: 'Translation Report',
  footerDef: [
    {
      title: 'Total Keys',
      value: 432,
      fuiStyle: 'success'
    },
    {
      title: 'Overall Translation',
      value: '90%',
      fuiStyle: 'info'
    }],
  bodyDef: [
    {
      title: 'en',
      value: 90,
      fuiStyle: 'success'
    },
    {
      title: 'fr',
      value: 90,
      fuiStyle: 'success'
    }
  ]
}

const LinearProgressCardDemo = () => {
  return (
    <section>
      <h2 className='font-light'>Linear Progress Cards <small>Single & multi line variants</small></h2>
      <div className='row'>
        <div className='col-md-4'>
          <CardLoading />
        </div>

        <div className='col-md-4'>
          <CardErrorDemo />
        </div>

        <div className='col-md-4'>
          <SingleProgressCardErrorDemo />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <MultiProgressNoFooterDemo />
        </div>

        <div className='col-md-4'>
          <LinearProgressCard cardOptions={singleProgress} />
        </div>

        <div className='col-md-4'>
          <LinearProgressCard cardOptions={singleProgress} />
        </div>
      </div>
    </section>
  )
}

const CardLoadingOptions = {
  title: 'Translation Report',
  footerDef: [
    {
      title: 'Total Keys',
      value: 0,
      fuiStyle: 'success'
    },
    {
      title: 'Overall Translation',
      value: '0',
      fuiStyle: 'info'
    }],
  bodyDef: [
  ],
  helpText: 'Just pass empty bodyDef property in the data to show a loading state.'
}
const CardLoading = () => {
  return (
    <LinearProgressCard cardOptions={CardLoadingOptions} />
  )
}

const CardErrorOptions = {
  title: 'Translation Report',
  error: {
    hasError: true,
    message: 'This is a custom error message'
  },
  footerDef: [
    {
      title: 'Total Keys',
      value: 0,
      fuiStyle: 'success'
    },
    {
      title: 'Overall Translation',
      value: '0',
      fuiStyle: 'info'
    }],
  bodyDef: [
  ],
  helpText: 'Pass error property wiht hasError set to true in the data to show a error state.'
}
const CardErrorDemo = () => {
  return (
    <LinearProgressCard cardOptions={CardErrorOptions} />
  )
}

const SingleProgressCardOptions = {
  title: 'Translation Report',
  error: {
  },
  footerDef: [
    {
      title: 'Total Keys',
      value: 20,
      fuiStyle: 'success'
    },
    {
      title: 'Overall Translation',
      value: '20%',
      fuiStyle: 'info'
    }],
  bodyDef: [
    {
      title: 'en',
      value: 90,
      fuiStyle: 'success'
    },
    {
      title: 'fr',
      value: 10,
      fuiStyle: 'warning'
    }
  ],
  helpText: 'Pass bodyDef in the data with correct values to show a multi line progress card. The card props is not very easy and intuitive.'
}

const SingleProgressCardErrorDemo = () => {
  return (
    <LinearProgressCard cardOptions={SingleProgressCardOptions} />
  )
}

const multiProgressNoFooter = {
  title: 'Reports',
  footerDef: [
  ],
  bodyDef: [
    {
      title: 'Country Progress',
      value: 90,
      fuiStyle: 'success'
    },
    {
      title: 'Store Progress',
      value: 20,
      fuiStyle: 'error'
    },
    {
      title: 'Translation Progress',
      value: 50,
      fuiStyle: 'warning'
    }
  ],
  helpText: 'Dont want to show anything in the footer? Here\'s how :)'
}
const MultiProgressNoFooterDemo = () => {
  return (
    <LinearProgressCard cardOptions={multiProgressNoFooter} />
  )
}
export default LinearProgressCardDemo
