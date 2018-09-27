import React from 'react'
import {Dialog, Button, Spinner} from 'ssp-ui'
import Form from './Form'

function trigger () {
  return <Button label='Show Dialog' fuiStyle='primary' />
}

var Modals = React.createClass({
  handleConfirm () {
    alert('confirm button pressed')
  },

  handleCancel () {
    alert('cancel button pressed')
  },
  handleClick () {
    const self = this
    this.refs['modal'].handleOpen()
    // set timeout here simulates the delay in resonse from server
    setTimeout(function () {
      self.refs['modal'].handleClose()
    }, 2000)
  },
  handleClose () {
    this.refs['modal'].handleClose()
  },

  render: function () {
    return (
      <div>
        <div>
          <h2>Modal <small /></h2>
          <div className='row'>

            <div className='col-xs-12'>
             A simple modal dialog with yes no hooks.
             <br />
              <Dialog trigger={trigger}
                handleConfirm={this.handleConfirm}
                handleCancel={this.handleCancel}
                title='Activate Country'
                message='Are you sure you want to Activate Country? This is irreversible.' />
            </div>
          </div>
          <br /><br />
          <div className='row'>
            <div className='col-xs-12'>
              Small Dialog
             <br />
              <Dialog trigger={trigger}
                handleConfirm={this.handleConfirm}
                handleCancel={this.handleCancel}
                title='Activate Country'
                message='Are you sure you want to Activate Country? This is irreversible.'
                size='small' />
            </div>
            <br /><br />
            <div className='col-xs-12'>
              Large Dialog
             <br />
              <Dialog trigger={trigger}
                handleConfirm={this.handleConfirm}
                handleCancel={this.handleCancel}
                title='Activate Country'
                message='Are you sure you want to Activate Country? This is irreversible.'
                size='large' />
            </div>

          </div>
          <br /><br />
          <div className='row'>
            <div className='col-xs-12'>
              Modal can show content passed as children, like the form in this case.
              <br />
              <Dialog trigger={trigger}
                title='Modal With Form'
                hideActions
                autoScrollBodyContent>
                <Form />
              </Dialog>
            </div>
          </div>

          <br /><br />
          <div className='row'>
            <div className='col-xs-12'>
              Modal click on backdrop will not close it
              <br />
              <Button label='Show Modal' fuiStyle='success' onClick={this.handleClick} />
              <Dialog ref='modal'
                trigger={null}
                modal
                title={<div className='text-center'>Loading. Please wait...</div>}
                hideActions>
                <div>
                  <Spinner />
                </div>
              </Dialog>
            </div>
          </div>

        </div>

      </div>
    )
  }

})

export default Modals
