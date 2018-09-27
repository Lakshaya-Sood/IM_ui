import React from 'react'
import Dialog from 'material-ui/Dialog'
import Button from '../Button'

const dialogSize = {
  small: {
    maxWidth: '505px'
  },
  large: {
    maxWidth: '992px'
  }
}

const dialogOverlayStyle = {
  backgroundColor: 'rgba(102, 129, 170, 0.1)'
}

const titleStyle = {
  color: '#002d72',
  fontSize: '20px',
  fontWeight: 'bold'
}
const bodyStyle = {
  color: '#35445B',
  fontSize: '16px',
  fontWeight: 'normal'
}

class ModalDialog extends React.Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.renderTrigger = this.renderTrigger.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.renderActions = this.renderActions.bind(this)
  }

  handleOpen () {
    this.setState({ open: true })
  };

  handleClose () {
    this.setState({ open: false })
  };

  handleConfirm () {
    const props = this.props
    props.handleConfirm && props.handleConfirm()
    this.handleClose()
  }

  handleCancel () {
    const props = this.props
    props.handleCancel && props.handleCancel()
    this.handleClose()
  }

  renderContent () {
    const props = this.props
    if (props.children) {
      return props.children
    }
    return props.message || 'Are you sure you want to do this?'
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

  renderActions () {
    const props = this.props
    if (props.hideActions) {
      return null
    }
    const actions = [
      <Button label={props.cancelButtonLabel || 'Cancel'} size='basic'
        fuiStyle='ghost' onClick={this.handleCancel} />,
      <Button label={props.confirmButtonLabel || 'Submit'} size='basic'
        fuiStyle={this.props.confirmButtonFuiStyle || 'primary'} onClick={this.handleConfirm} />
    ]
    return actions
  }

  render () {
    const props = this.props
    let style = {}
    if (props.size) {
      style = dialogSize[props.size] || {}
    }
    const overlayStyle = Object.assign({}, dialogOverlayStyle, props.overlayStyle)
    const contentStyle = Object.assign({}, style, props.contentStyle)

    return (
      <div>
        {this.renderTrigger()}
        <Dialog
          title={props.title || 'Confirmation'}
          titleStyle={titleStyle}
          bodyStyle={bodyStyle}
          actions={this.renderActions()}
          modal={this.props.modal}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
          autoScrollBodyContent={this.props.autoScrollBodyContent}
          contentStyle={contentStyle}
          overlayStyle={overlayStyle}
          {...this.props}>
          {this.renderContent()}
        </Dialog>
      </div>
    )
  }
}

export default ModalDialog
