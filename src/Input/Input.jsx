import React from 'react'
import Formsy from 'formsy-react'
import Checkbox from '../Input.Checkbox'
import Radio from '../Input.RadioButton'
import MultiSelect from '../MultiSelect'

// todo - create a formsy less input
const Input = React.createClass({

  // Add the Formsy Mixin
  mixins: [Formsy.Mixin],

  // setValue() will set the value of the component, which in
  // turn will validate it and the rest of the form
  changeValue (event, isChecked) {
    if (this.props.type === 'checkbox') {
      this.props.onChange && this.props.onChange(event.currentTarget['value'], isChecked)
      return this.setValue(event.currentTarget['value'], isChecked)
    }
    this.props.onChange && this.props.onChange(event.currentTarget['value'])
    this.setValue(event.currentTarget['value'])
  },
  keyDown: function (event) {
    this.props.onKeyDown && this.props.onKeyDown(event.keyCode)
  },
  renderLabel () {
    if (this.props.title != null) {
      return (
        <label className='fui-input-label' htmlFor={this.props.name}>{this.props.title}</label>
      )
    }
  },

  render () {
    // Set a specific className based on the validation
    // state of this component. showRequired() is true
    // when the value is empty and the required prop is
    // passed to the input. showError() is true when the
    // value typed is invalid
    const className = 'm-input m-input-name' + (' ' + (this.props.className + ' ') || ' ') +
      (this.props.required ? 'requiredMark ' : ' ') + (this.showError() ? 'error' : ' ')

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    const errorMessage = this.getErrorMessage()
    const helpMessage = this.props.helpMessage || null

    if (this.props.type === 'checkbox') {
      return (
        <div className={className}>
          <Checkbox
            name={this.props.name}
            label={this.props.title}
            disabled={this.props.disabled}
            onChange={this.changeValue} />
          <span className='help-block text-muted'>{helpMessage}</span>
          <span className='m-input-errorMessage'>{errorMessage}</span>
        </div>
      )
    }

    if (this.props.type === 'radio') {
      return (
        <div className={className}>
          {this.renderLabel()}
          <Radio
            name={this.props.name}
            defaultSelected={this.props.defaultSelected}
            valueSelected={this.props.valueSelected}
            onChange={this.changeValue}
            style={this.props.style}
            options={this.props.options}
        />
          <span className='help-block text-muted'>{helpMessage}</span>
          <span className='m-input-errorMessage'>{errorMessage}</span>
        </div>
      )
    }

    if (this.props.type === 'multiselect') {
      return (
        <div className={className}>
          {this.renderLabel()}
          <MultiSelect
            label={this.props.label}
            onChange={this.props.onChange}
            value={this.props.value}
            multiple={this.props.multiple}
            disabled={this.props.disabled}
          >
            {this.props.options}
          </MultiSelect>
        </div>
      )
    }

    if (this.props.type === 'textarea') {
      return (
        <div className={className}>
          <label className='fui-input-label' htmlFor={this.props.name}>{this.props.title}</label>
          <textarea className='m-input-element m-extra-class-on-input-tag'
            type='text'
            name={this.props.name}
            onChange={this.changeValue}
            onKeyDown={this.keyDown}
            value={this.getValue()}
            disabled={this.props.disabled}
            placeholder={this.props.placeholder}
        />
          <span className='help-block text-muted'>{helpMessage}</span>
          <span className='m-input-errorMessage'>{errorMessage}</span>
        </div>
      )
    }

    return (
      <div className={className}>
        <label className='fui-input-label' htmlFor={this.props.name}>{this.props.title}</label>
        <input
          className='m-input-element extra-class-on-input-tag'
          type={this.props.type || 'text'}
          name={this.props.name}
          onChange={this.changeValue}
          onKeyDown={this.keyDown}
          value={this.getValue()}
          disabled={this.props.disabled}
          placeholder={this.props.placeholder}
        />
        <span className='help-block text-muted'>{helpMessage}</span>
        <span className='m-input-errorMessage'>{errorMessage}</span>
      </div>
    )
  }
})

export default Input
