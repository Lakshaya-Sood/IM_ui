import React, { PropTypes, Component } from 'react'
import {Button, Switch} from 'ssp-ui'

const style = {
  margin: 12
}
var Buttons = React.createClass({

  handleClick () {
    alert('button clicked')
  },

  render: function () {
    return (
      <section>
        <h2>Buttons <small /></h2>
        <div className='row'>
          <div className='col-xs-12'>

            <Button style={style} label='Add Attachment' fuiStyle='primary' onClick={this.handleClick} />
            <Button style={style} label='Add Attachment' fuiStyle='primary'disabled onClick={this.handleClick} />
            <Button style={style} label='Cancel' fuiStyle='ghost' onClick={this.handleClick} />
            <Button style={style} label='Cancel' fuiStyle='ghost' disabled onClick={this.handleClick} />
          </div>
        </div>

        {/* <h2>Carl buttons</h2>
        <div className='col-xs-12'>
          <Button style={style} label='Carl-small success ' fuiStyle='success' size='small' onClick={this.handleClick} />
          <Button style={style} label='Carl-small primary ' fuiStyle='primary' size='small' onClick={this.handleClick} />
          <Button style={style} label='Carl-small info ' fuiStyle='info' size='small' onClick={this.handleClick} />
          <Button style={style} label='Carl-small warning ' fuiStyle='warning' size='small' onClick={this.handleClick} />
        </div>

        <div className='col-xs-12'>
          <Button style={style} label='Carl-basic success ' fuiStyle='success' size='basic' onClick={this.handleClick} />
          <Button style={style} label='Carl-basic primary ' fuiStyle='primary' size='basic' onClick={this.handleClick} />
          <Button style={style} label='Carl-basic info ' fuiStyle='info' size='basic' onClick={this.handleClick} />
          <Button style={style} label='Carl-basic warning ' fuiStyle='warning' size='basic' onClick={this.handleClick} />
        </div>

        <div className='col-xs-12'>
          <Button style={style} label='Carl-large success ' fuiStyle='success' size='large' onClick={this.handleClick} />
          <Button style={style} label='Carl-large primary ' fuiStyle='primary' size='large' onClick={this.handleClick} />
          <Button style={style} label='Carl-large info ' fuiStyle='info' size='large' onClick={this.handleClick} />
          <Button style={style} label='Carl-large warning ' fuiStyle='warning' size='large' onClick={this.handleClick} />
        </div>

        <div className='col-xs-12'>
          <Button style={style} label='Carl-extra-large success ' fuiStyle='success' size='x-large' onClick={this.handleClick} />
          <Button style={style} label='Carl-extra-large primary ' fuiStyle='primary' size='x-large' onClick={this.handleClick} />
          <Button style={style} label='Carl-extra-large info ' fuiStyle='info' size='x-large' onClick={this.handleClick} />
          <Button style={style} label='Carl-extra-large warning ' fuiStyle='warning' size='x-large' onClick={this.handleClick} />
        </div>

        <h2>Vince buttons</h2>
        <div className='col-xs-12'>
          <Button icon={<ActionAndroid />} style={style} label='Vince-small success' fuiStyle='success' size='small' onClick={this.handleClick} />
          <Button icon={<ActionAndroid />} style={style} label='Vince-small primary' fuiStyle='primary' size='small' onClick={this.handleClick} />
          <Button icon={<ActionAndroid />} style={style} label='Vince-small info' fuiStyle='info' size='small' onClick={this.handleClick} />
          <Button icon={<ActionAndroid />} style={style} label='Vince-small warning' fuiStyle='warning' size='small' onClick={this.handleClick} />
        </div>

        <div className='col-xs-12'>
          <Button icon={<Delete />} style={style} label='Vince-basic success' fuiStyle='success' size='basic' onClick={this.handleClick} />
          <Button icon={<Delete />} style={style} label='Vince-basic primary' fuiStyle='primary' size='basic' onClick={this.handleClick} />
          <Button icon={<Delete />} style={style} label='Vince-basic info' fuiStyle='info' size='basic' onClick={this.handleClick} />
          <Button icon={<Delete />} style={style} label='Vince-basic warning' fuiStyle='warning' size='basic' onClick={this.handleClick} />
        </div>

        <div className='col-xs-12'>
          <Button icon={<Done />} style={style} label='Vince-large success' fuiStyle='success' size='large' onClick={this.handleClick} />
          <Button icon={<Done />} style={style} label='Vince-large primary' fuiStyle='primary' size='large' onClick={this.handleClick} />
          <Button icon={<Done />} style={style} label='Vince-large info' fuiStyle='info' size='large' onClick={this.handleClick} />
          <Button icon={<Done />} style={style} label='Vince-large warning' fuiStyle='warning' size='large' onClick={this.handleClick} />
        </div>

        <div className='col-xs-12'>
          <Button icon={<VerifiedUserIcon />} style={style} label='Vince-extra-large success' fuiStyle='success' size='x-large' onClick={this.handleClick} />
          <Button icon={<VerifiedUserIcon />} style={style} label='Vince-extra-large primary' fuiStyle='primary' size='x-large' onClick={this.handleClick} />
          <Button icon={<VerifiedUserIcon />} style={style} label='Vince-extra-large info' fuiStyle='info' size='x-large' onClick={this.handleClick} />
          <Button icon={<VerifiedUserIcon />} style={style} label='Vince-extra-large warning' fuiStyle='warning' size='x-large' onClick={this.handleClick} />
        </div>

        <h2>Issac buttons</h2>
        <div className='col-xs-12'>
          <Button icon={<Backup />} style={style} fuiStyle='success' size='small' onClick={this.handleClick} />
          <Button icon={<Backup />} style={style} fuiStyle='primary' size='small' onClick={this.handleClick} />
          <Button icon={<Backup />} style={style} fuiStyle='info' size='small' onClick={this.handleClick} />
          <Button icon={<Backup />} style={style} fuiStyle='warning' size='small' onClick={this.handleClick} />
        </div>

        <div className='col-xs-12'>
          <Button icon={<VerifiedUserIcon />} style={style} fuiStyle='success' size='medium' onClick={this.handleClick} />
          <Button icon={<VerifiedUserIcon />} style={style} fuiStyle='primary' size='medium' onClick={this.handleClick} />
          <Button icon={<VerifiedUserIcon />} style={style} fuiStyle='info' size='medium' onClick={this.handleClick} />
          <Button icon={<VerifiedUserIcon />} style={style} fuiStyle='warning' size='medium' onClick={this.handleClick} />
        </div>

        <div className='col-xs-12'>
          <Button icon={<Done />} style={style} fuiStyle='success' size='large' onClick={this.handleClick} />
          <Button icon={<Done />} style={style} fuiStyle='primary' size='large' onClick={this.handleClick} />
          <Button icon={<Done />} style={style} fuiStyle='info' size='large' onClick={this.handleClick} />
          <Button icon={<Done />} style={style} fuiStyle='warning' size='large' onClick={this.handleClick} />
        </div>

        <div className='col-xs-12'>
          <Button icon={<ActionAndroid />} style={style} fuiStyle='success' size='x-large' onClick={this.handleClick} />
          <Button icon={<ActionAndroid />} style={style} fuiStyle='primary' size='x-large' onClick={this.handleClick} />
          <Button icon={<ActionAndroid />} style={style} fuiStyle='info' size='x-large' onClick={this.handleClick} />
          <Button icon={<ActionAndroid />} style={style} fuiStyle='warning' size='x-large' onClick={this.handleClick} />
        </div>

        <div className='row'>
          <h2><small>Full width buttons</small></h2>
          <div className='col-xs-4'>
            <Button style={style} label='Activate' fuiStyle='success' fullWidth onClick={this.handleClick} />
          </div>
          <div className='col-xs-4'>
            <Button style={style} label='Activate' fuiStyle='success' fullWidth onClick={this.handleClick} />
          </div>
        </div> */}
        <br />
      </section>
    )
  }

})

export default Buttons
