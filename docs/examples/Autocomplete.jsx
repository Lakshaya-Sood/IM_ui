import React from 'react'
import {Autocomplete, Button} from 'ssp-ui'

const dataSource = [
  { id: 'r', name: 'Red' },
  { id: 'dr', name: 'Dark red' },
  { id: 'g', name: 'Green' },
  { id: 'dg', name: 'Dark green' },
  { id: 'b', name: 'Blue' },
  { id: 'db', name: 'Dark blue' },
  { id: 'w', name: 'white' },
  { id: 'y', name: 'yellow' },
  { id: 'o', name: 'orange' },
  { id: 'bl', name: 'Black' }
]

var AutocompleteDemo = React.createClass({

  getInitialState () {
    return {
      color: {},
      show: false,
      searchText: ''
    }
  },

  handleClick (bool, value) {
    if (bool) {
      if (value && value !== null) {
        this.setState({
          color: value
        })
      }
    } else {
      this.setState({
        color: { id: 'custom', name: value }
      })
    }
  },

  handleBtnClick () {
    this.setState({
      show: true
    })
    this.refs[`autoComplete`].setState({searchText: ''})
  },

  render: function () {
    return (
      <section>
        <h2 className='font-light'>Autocomplete                      <small>regular text-field</small></h2>
        <div className='row'>
          <div className='col-md-3'>
            <Autocomplete placeholder='Type colors'
              ref={'autoComplete'}
              data={dataSource} value='id' text='name'
              searchText={this.state.searchText}
              filter='Fuzzy'
              openonfocus={false}
              minCharacters={3} // If this props is present, openonfocus={true} does not matter.
              onChange={this.handleClick} />
          </div>
          <div className='col-md-2'>
            <Button label='click me' fuiStyle='primary' onClick={this.handleBtnClick} />
          </div>
          <div className='col-md-7'>
            { this.state.show && <h4>You can use the value :                      {this.state.color.id} for {this.state.color.name} </h4> }
          </div>
        </div>
      </section>
    )
  }

})

export default AutocompleteDemo
