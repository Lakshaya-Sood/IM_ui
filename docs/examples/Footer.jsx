import React from 'react'
import { Footer } from 'ssp-ui'
import Table from '../src/Table'

const props = [
  {
    name: 'languages',
    type: 'array',
    defaultValue: '[]',
    description: 'List of langauges'
  },
  {
    name: 'selectedlanguage',
    type: 'string',
    defaultValue: '',
    description: 'Selected language'
  },
  {
    name: 'onLanguageChange',
    type: 'func',
    defaultValue: '',
    description: 'Callback fired when langauge is changed'
  }
]

class FooterDemo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedLanguage: 'fr'
    }
  }

  render () {
    return (
      <div>
        <h2 className='font-light'>Footer <small className='font-light'>Application footer with language switcher</small></h2>
        <br />
        <div className='row'>
          <div className='col-xs-12'>

            <Footer 
              languages={[{code: 'en-GB', name: 'English'}, {code: 'fr', name: 'Francias'}]}
              selectedLanguage={this.state.selectedLanguage}
              onLanguageChange={(event, index, value)=> { alert(value); this.setState({selectedLanguage: value})}}/>

          </div>
        </div>
        <br />
        <h3 className='font-light'>Usage <small /></h3>
        <br />
        <pre style={{fontSize: '16px'}}>
          <code className='language-jsx'>
            {`
              <Footer 
              languages={[{code: 'en-GB', name: 'English'}, {code: 'fr', name: 'Francias'}]}
              selectedLanguage={this.state.selectedLanguage}
              onLanguageChange={(event, index, value)=> { this.setState({selectedLanguage: value})}}/>
              `}
          </code>
        </pre>
        <br />
        <h3 className='font-light'>Props <small /></h3>
        <br />
        <Table rows={props} />
        <br />
      </div>
    )
  }
}

export default FooterDemo
