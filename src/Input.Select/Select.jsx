import React from 'react'
import Formsy from 'formsy-react'

const Select = React.createClass({
  mixins: [Formsy.Mixin],

  changeValue (event) {
    this.setValue(event.currentTarget.value)
    this.props.onChange && this.props.onChange(event.currentTarget.value)
  },

  render () {
    const className = 'm-input m-input-name' + (' ' + (this.props.className + ' ') || ' ') +
      (this.showRequired() ? 'required' : this.showError() ? 'error' : '')
    const errorMessage = this.getErrorMessage()
    const helpMessage = this.props.helpMessage || null

    const options = this.props.options.map((option, i) => (
      <option key={option.title + option.value} value={option.value}>
        {option.title}
      </option>
    ))

    return (
      <div className={className}>
        <label htmlFor={this.props.name} className='fui-input-label'>{this.props.title}</label>
        <select className='m-input-element m-extra-class-on-input-tag' disabled={this.props.disabled || false} name={this.props.name} onChange={this.changeValue} value={this.getValue()}>
          {options}
        </select>
        <span className='help-block text-muted'>{helpMessage}</span>
        <span className='m-input-errorMessage'>{errorMessage}</span>
      </div>
    )
  }

})

export default Select
