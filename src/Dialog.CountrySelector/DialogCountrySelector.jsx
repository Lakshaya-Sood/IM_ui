import React from 'react'
import Dialog from 'material-ui/Dialog'
import Button from '../Button'
import CountryFlag from '../CountryFlag'
import BasicList from '../List.Basic'

const customContentStyle = {
  width: '30%',
  'margin-left': '33.5%'
}

class ModalDialogCountrySelector extends React.Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.renderTrigger = this.renderTrigger.bind(this)
    this.handleCountryChange = this.handleCountryChange.bind(this)
  }

  handleOpen () {
    this.setState({ open: true })
  };

  handleClose () {
    this.setState({ open: false })
  };

  handleCountryChange (event, key) {
    this.props.handleCountrySelect && this.props.handleCountrySelect(key)
  }

  renderContent () {
    const props = this.props
    const displayCountries = props.countryList.map((option, i) => (
      {
        key: option.countryCode,
        primaryText: <span><CountryFlag countryCode={option.countryCode} /> {option.countryName}</span>
      }
      ))
    return (
      <BasicList
        className='no-borders'
        style={{margin: '1px -24px -24px'}}
        listItems={displayCountries}
        defaultSelected={this.props.defaultSelected}
        onChange={this.handleCountryChange}
        disableTouchRipple
        disableFocusRipple
          />
    )
  }

  renderTrigger () {
    const props = this.props
    if (props.trigger) {
      return (
        <span onTouchTap={this.handleOpen.bind(this)}>
          {props.trigger()}
        </span>
      )
    }
  }

  render () {
    const props = this.props

    return (
      <div style={{position: 'center'}}>
        {this.renderTrigger()}
        <Dialog
          title={props.title || 'Confirmation'}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
          style={customContentStyle}
          autoScrollBodyContent
                    >

          {this.renderContent()}

        </Dialog>
      </div>
    )
  }
}

export default ModalDialogCountrySelector
