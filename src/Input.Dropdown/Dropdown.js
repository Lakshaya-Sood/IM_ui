import React from 'react'
import Formsy from 'formsy-react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const Dropdown = React.createClass({
  mixins: [Formsy.Mixin],

  changeValue (event, index, value) {
    this.setValue(value)
    this.props.onChange && this.props.onChange(value)
  },

  render () {
    const props = this.props
    const className = 'form-group' + (' ' + this.props.className || ' ') +
      (this.showRequired() ? 'required' : this.showError() ? 'error' : '')
    const errorMessage = this.getErrorMessage()
    const helpMessage = this.props.helpMessage || null

    const options = this.props.options.map((option, i) => (
      <MenuItem value={option.value} primaryText={option.title} />
    ))

    return (
      <div className={className}>
        <SelectField
          floatingLabelText={props.title}
          value={this.getValue()}
          onChange={this.changeValue}
          disabled={props.disabled}
          autoWidth={props.autoWidth}
          style={props.style}
          floatingLabelStyle={{color: '#1A3B7A', fontSize: '18px', fontWeight: 'normal'}}
          underlineStyle={{borderBottom: 'none'}}
          labelStyle={{color: '#666'}}
        >{options}
        </SelectField>
        <span className='help-block text-muted'>{helpMessage}</span>
        <span className='validation-error'>{errorMessage}</span>
      </div>
    )
  }

})

export default Dropdown
