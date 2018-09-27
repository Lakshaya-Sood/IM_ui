import React, { Component } from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()
import {ThemeProvider, Footer } from 'ssp-ui'
import 'typeface-lato'
import './assets/styles/base'
import ComponentPageLayout from './src/ComponentPageLayout'
import Icons from './src/Icons'
import Menu from './src/Menu'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      view: 'INDEX'
    }
  }

  handleAlarmClick (e) {
  }

  handleExpandClick (e) {
    // this.setState({sameOpen: !this.state.sameOpen})
    this.refs['sidelle-main'].handleToggle()
  }

  render () {
    const self = this
    let style = 'main ui-view '
    if (this.state.isExpanded) {
      style = style + ' slide-body'
    }
    return (
      <ThemeProvider>
        <section className='ui-view'>
          <div className='dashboard-page ui-view'>
            <Menu onchange={(view) => this.setState({view})}
              onExpand={() => this.setState({isExpanded: !this.state.isExpanded})} />

            <div className='container-fluid'>
              <div className='row'>
                <div className={style}>
                  {this.state.view === 'INDEX' ? <ComponentPageLayout /> : <Icons />}
                  
                </div>
                
              </div>
            </div>
            {/* <div style={{position: 'absolute',
              bottom: 0,
              left: '80px',
              right: 0}}>
            <Footer 
              languages={[{code: 'en-GB', name: 'English'}, {code: 'fr', name: 'Francias'}]}
              selectedLanguage={this.state.selectedLanguage}
              onLanguageChange={(event, index, value)=> {this.setState({selectedLanguage: value})}}/>
          </div> */}
          </div>
        </section>
      </ThemeProvider>
    )
  }
}

render(
  <App />,
  document.getElementById('react-app')
)
