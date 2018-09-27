import React, { PropTypes } from 'react'
import AutoComplete from 'material-ui/AutoComplete'

const propTypes = {
  placeholder: PropTypes.string
}

const defaultProps = {
  placeholder: 'Start typings'
}

const style = {
  backgroundColor: '#fff',
  color: '#35445B',
  height: '40px',
  border: '1px solid #CCD0D6',
  lineHeight: '22px',
  fontSize: '16px'
}

class Autocomplete extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      color: '',
            // based on this value, trying to maintain autocomplete's menu state open/close
      shouldOpenList: props.openonfocus || false,
      searchText: this.props.searchText
    }
  }

  onNewRequest (chosenRequest, index) {
    this.props.onChange(true, chosenRequest)
  }

  onUpdateInput (searchText, dataSource, params) {
    if (this.props.minCharacters && this.props.minCharacters !== undefined) {
      let min_character = this.props.minCharacters

      if (searchText && searchText.length >= this.props.minCharacters) {
        this.setShouldOpenList(true, searchText)
        this.props.onChange(false, searchText)
      } else {
        this.setShouldOpenList(false, searchText)
        this.props.onChange(false, searchText)
      }
    } else {
      this.setShouldOpenList(true, searchText)
      this.props.onChange(false, searchText)
    }
  }

  setShouldOpenList (value, text) {
    this.setState({
      shouldOpenList: value,
      searchText: text
    })
  }

  getFilter (filter) {
    switch (filter) {
      case 'Insensitive':
        return AutoComplete.caseInsensitiveFilter
      case 'Fuzzy':
        return AutoComplete.fuzzyFilter
      default:
        return ''
    }
  }

  render () {
    let props = this.props
    const filter = this.getFilter(this.props.filter)

    return (
      <div>
        <AutoComplete
          popoverProps={{
            open: this.state.shouldOpenList
          }}
          hintText={props.placeholder}
          dataSource={props.data}
          dataSourceConfig={{ text: props.text, value: props.value }}
          className='fabric-autocomplete form-control'
          disableFocusRipple={false}
          filter={filter}
          textFieldStyle={style}
          searchText={this.state.searchText}
          onNewRequest={this.onNewRequest.bind(this)}
          onUpdateInput={this.onUpdateInput.bind(this)}
          openOnFocus={(this.props.minCharacters && this.props.minCharacters !== undefined) ? false : this.props.openonfocus}
                />
      </div>
    )
  }
}

Autocomplete.propTypes = propTypes
Autocomplete.defaultProps = defaultProps
export default Autocomplete
