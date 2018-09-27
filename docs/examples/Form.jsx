import React, { PropTypes, Component } from 'react'
import {FuiForm, Input, Checkbox, Button, Datepicker, Select, TimePicker, Dropdown} from 'ssp-ui'

var moment = require('moment')

const complexityOptions = [
    { title: 'High', value: 'high' },
    { title: 'Medium', value: 'medium' },
    { title: 'Low', value: 'low' },
    { title: 'Very Low', value: 'verylow' }
]

const radioOptions = [
    { value: 'high', label: 'High', disabled: true },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' }
]

const multiSelectOptions = [
    { value: 'DE', label: 'Germany', checked: false },
    { value: 'CZ', label: 'Czech Republic', checked: false },
    { value: 'RO', label: 'Romania', checked: false},
    { value: 'IT', label: 'Italy', checked: false},
    { value: 'ES', label: 'Spain', checked: false},
    { value: 'IN', label: 'India', checked: false},
    { value: 'PL', label: 'Poland', checked: false},
    { value: 'KZ', label: 'Kazakhstan', checked: false}
]

const countryList = [
    { code: 'DE', name: 'Germany' },
    { code: 'CZ', name: 'Czech Republic' },
    { code: 'RO', name: 'Romania'},
    { code: 'IT', name: 'Italy'},
    { code: 'ES', name: 'Spain'},
    { code: 'IN', name: 'India'},
    { code: 'PL', name: 'Poland'},
    { code: 'KZ', name: 'Kazakhstan'}
]

const switchLabelStyle = {
  width: '100%',
  marginRight: '20px',
  fontSize: '14px',
  fontWeight: 'normal',
  color: '#666666'
}

const SampleForm = React.createClass({
  getInitialState () {
    return {
      canSubmit: false,
      effectiveDate: new Date(),
      maxDate: new Date(),
      defaultSelectedVal: '',
      effectiveTime: new Date(),
      allCountries: countryList,
      filteredCountries: [],
      label: [],
      countryData: [],
      countryDataSingle: ''
    }
  },

  enableButton () {
    this.setState({
      canSubmit: true
    })
  },

  disableButton () {
    this.setState({
      canSubmit: false
    })
  },

  submit (model) {
    alert('Submitting form, check values in the console!')
    console.log(model)
  },

  resetForm: function () {
    this.refs.form.reset()
  },
  handleOnCheck (e, isChecked) {
    alert('checked ' + isChecked)
  },

  handleChange (v) {
    alert('select value changed. New value is ' + v)
  },

  handleDateChange (v) {
    alert('date changed. New date is: ' + v + '\n Date in string format is: ' + v)
    this.setState({effectiveDate: v})
  },
  handleDateChange1 (v) {
    alert('date changed. New date is: ' + v + '\n Date in string format is: ' + v)
    this.setState({maxDate: v})
  },
  handleCheckboxChange (v, isChecked) {
    alert('checkbox value changed. New value is ' + v + ' Checked: ' + isChecked)
  },

  handleRadioButtonChange (value) {
    this.setState({ defaultSelectedVal: value })
    alert('New radio option: ' + value)
  },

  componentDidMount () {
    this.setState({ defaultSelectedVal: 'low' })
  },

  handleTimeChange (val) {
    var timeString = moment(val).format('HH:mm:ss').toString()
    alert('Effective time: ' + timeString)
    this.setState({ effectiveTime: val })
  },

  filterRecords (e) {
    var self = this
    if (!e.target.value || e.target.value === '') { this.setState({ filteredCountries: multiSelectOptions}) } else {
      var items = []
      this.state.filteredCountries.forEach(function (item, index) {
        if (item.label.toLowerCase().indexOf(e.target.value) >= 0) {
          items.push(item)
        }
      })
      console.log(this.state.filteredCountries)
      console.log(items)
      this.setState({ filteredCountries: items})
    }
  },

  handleClose () {
    this.setState({filteredCountries: multiSelectOptions})
  },

  itemSelect (e) {
    var self = this
    self.state.filteredCountries.forEach(function (item, index) {
      if (item.label.toLowerCase().indexOf(e.target.value) >= 0) {
        if (e.target.checked) { self.state.filteredCountries[index].checked = true } else { self.state.filteredCountries[index].checked = false }
      }
    })
    alert(e.target.value + ' ' + e.target.checked)
  },

  onCountryChange (val) {
    this.setState({ countryData: val })
  },

  onCountryChangeSingle (val) {
    this.setState({ countryDataSingle: val })
  },

  getCountryOptions () {
    var countryOptions = []
    countryList.forEach(function (ctr) {
      countryOptions.push(React.createElement('option', {value: ctr.code}, ctr.name))
    })

    return countryOptions
  },

  getOptionsWithIcons() {
    const me = this
    const appGroupsOptions = []
    appGroupsOptions.push(React.createElement('option', {value: ''}, 'No Group'))

    appGroupsOptions.push(React.createElement('option', {value: 12345}, <div value={12345}><img src='' /><span 
    className='app-group-label-option pull-right'>{'Group 1'}</span></div>, 'Group 1'))

    appGroupsOptions.push(React.createElement('option', {value: 123456}, <div value={123456}><img src='' /><span 
    className='app-group-label-option pull-right'>{'Group 2'}</span></div>, 'Group 2'))
    return appGroupsOptions
  },


  handleKeyDown (val) {
    alert('Pressed keycode is: ' + val)
  },

  render () {
    return (
      <section>
        <h2 className='font-thin'>Form <small>with super easy validation capabilities</small></h2>
        <h2 className='font-thin'><small /></h2>
        <div className='row'>

          <FuiForm ref='form' onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
            <div className='col-xs-12'>
              <div className='row'>
                <Input
                  name='accountableEmail'
                  title='Accountable'
                  className='col-xs-6'
                  validations='isEmail'
                  validationError='This is not a valid email'
                  required
                  helpMessage='This person is accountable.' />

                <Input
                  name='responsibleEmail'
                  className='col-xs-6'
                  title='Responsible'
                  placeholder='Enter responsible email'
                  helpMessage='This person is responsible.' />
              </div>
            </div>
            <Input
              type='textarea'
              name='comments'
              title='Comments'
              className='col-xs-12'
              placeholder='Enter comment'
              labelColor='#1a3b7a'
              required />

            <Input
              name='kayDownEmail'
              title='Keydown'
              className='col-xs-6'
              placeholder='Enter email'
              onKeyDown={this.handleKeyDown} />

            <Select
              className='col-xs-6'
              onChange={this.handleChange}
              name='complexity'
              title='Complexity'
              disabled
              options={complexityOptions} />

            <Select
              onChange={this.handleChange}
              name='complexity'
              title='Complexity'
              className='col-xs-6'
              options={complexityOptions} />
            {/*
              <Dropdown
                onChange={this.handleChange}
                name='category'
                title='Category'
                className='col-xs-6'
                options={complexityOptions}
                value='high' /> */}

            <Input
              name='testMultiSelect'
              type='multiselect'
              multiple
              className='col-xs-6'
              value={this.state.countryData}
              onChange={this.onCountryChange}
              title='Select multiple Country'
              disabled='false'
              label='Select multiple Country'
              options={this.getCountryOptions()}
              required />

              <Input
                name='testSelectWithIcon'
                type='multiselect'
                multiple={false}
                className='col-xs-6'
                value={this.state.countryData}
                onChange={this.onCountryChange}
                title = "Select Options With Icons"
                disabled='false'
                label='Select options with Icons'
                options={this.getOptionsWithIcons()}
                required />


            <Input
              name='testSingleSelect'
              type='multiselect'
              multiple={false}
              value={this.state.countryDataSingle}
              onChange={this.onCountryChangeSingle}
              title='Select one Country'
              disabled='false'
              label='Select single Country'
              className='col-xs-6'
              options={this.getCountryOptions()}
              required />

            <Input
              name='testSingleSelect'
              type='multiselect'
              multiple={false}
              value={this.state.countryDataSingle}
              onChange={this.onCountryChangeSingle}
              title='Select one Country'
              disabled='true'
              className='col-xs-6'
              label='Select single Country'
              options={this.getCountryOptions()}
              required />

            <Datepicker
              className='col-xs-6'
              time={false}
              name='EffectiveDate'
              value={this.state.effectiveDate}
              onChange={this.handleDateChange}
              label='Min Date is Current Date'
              labelStyle={{fontWeight: 'normal'}}
              min={new Date()} />

            <Datepicker
              time={false}
              className='col-xs-6'
              name='CurrentDate'
              value={this.state.maxDate}
              onChange={this.handleDateChange1}
              label='Max. Date is Current date'
              labelStyle={{fontWeight: 'normal'}}
              max={new Date()} />
            <br />

            <TimePicker
              className='col-xs-6'
              onChange={this.handleTimeChange}
              step={5}
              label='Effective Time'
              value={this.state.effectiveTime} />

            <div className='col-xs-6'>
              <Input
                name='isPrivate'
                value='Private'
                title='Is Private'
                type='checkbox'
                onChange={this.handleCheckboxChange} />
              <Input
                name='isPublic'
                value='Public'
                title='Is Public'
                type='checkbox'
                onChange={this.handleCheckboxChange} />
            </div>

            <Input
              className='col-xs-6'
              name='testRadioGroup'
              type='radio'
              options={radioOptions}
              valueSelected={this.state.defaultSelectedVal}
              onChange={this.handleRadioButtonChange}
              style={{ display: 'flex' }} />

            <Button label='Activate' fuiStyle='ghost' disabled={!this.state.canSubmit}
              type='submit' />
            <Button label='Reset' fuiStyle='primary' onClick={this.resetForm}
              type='button' />

          </FuiForm>
        </div>

      </section>
    )
  }
})

export default SampleForm
