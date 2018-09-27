import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {FuiTheme} from '../zutils/StyleConfig'
const checkboxStyle = FuiTheme.checkbox

const muiTheme = getMuiTheme({
  fontFamily: 'Lato, sans-serif',
  checkbox: {
    checkedColor: checkboxStyle.checkedColor
  },
  radioButton: {
    checkedColor: checkboxStyle.checkedColor
  }
})

const propTypes = {
}

const defaultProps = {
}

class FuiThemeProvider extends React.Component {
  render () {
    const props = this.props
    return (
      <MuiThemeProvider muiTheme={muiTheme} {...props} >
        {props.children}
      </MuiThemeProvider>
    )
  }
}

FuiThemeProvider.propTypes = propTypes
FuiThemeProvider.defaultProps = defaultProps

export default FuiThemeProvider
