import React, { Component } from 'react'
import { Sidney, SidneyOption, Sidelle, Sam, SamOption } from 'ssp-ui'
import {IconButton} from 'material-ui'
import AllApps from '../../src/svg-icons/AllApps'
import MyApps from '../../src/svg-icons/MyApps'

export default class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sameOpen: false
    }
  }

  handleAlarmClick (e) {
    this.setState({sameOpen: false})
  }

  handleExpandClick (e) {
    this.props.onExpand()
    this.setState({sameOpen: !this.state.sameOpen})
  }

  render () {
    const self = this

    return (

      <div>
        <Sidney
          expand={this.state.sameOpen}
          onUserProfileClick={() => { alert('click works here') }}
          onExpandClick={this.handleExpandClick.bind(this)}
          appVersion={'v0.0.2'}>
          <SidneyOption onClick={this.props.onchange.bind(this, 'INDEX')} icon={<AllApps />} label='Components' selected />
          <SidneyOption onClick={this.props.onchange.bind(this, 'ICONS')} icon={<MyApps />} label='Icons' />
        </Sidney>

        {/* <Sam
          open={this.state.sameOpen}
          onRequestChange={(sameOpen) => this.setState({ sameOpen })}
          appVersion={'v0.0.2'}
          onCollapseClick={this.handleExpandClick.bind(this)}
          onUserProfileClick={this.handleAlarmClick.bind(this)}>
          <SamOption selected onClick={() => {}} icon={<AllApps />} label='Components' />
        </Sam> */}

      </div>
    )
  }
}
