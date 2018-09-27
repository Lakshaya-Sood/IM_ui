import React from 'react'
import {SnackBar} from 'ssp-ui'

const SnackBarExample = React.createClass({
  show () {
    this.refs['snackbar'].warning('Something went wrong')
  },

  render () {
    return (
      <section>
        <h2>SnackBar
                    <small class='font-thin' onClick={this.show}> click <a>HERE</a>  See the snackbar at the top (Hidden after 4 seconds)</small>
        </h2>
        <SnackBar ref='snackbar' duration='4000' />
      </section>
    )
  }
})

export default SnackBarExample
