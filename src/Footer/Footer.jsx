import React, {PropTypes} from 'react'
import MenuItem from 'material-ui/MenuItem'
import DropDownMenu from 'material-ui/DropDownMenu'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'
import {FuiTheme} from '../zutils/StyleConfig';

const style = FuiTheme.appFooter;

const propTypes = {
  languages: PropTypes.array,
  selectedLanguage: PropTypes.string,
  onLanguageChange: PropTypes.func
}

const defaultProps = {
  languages: [],
  selectedLanguage: '',
  onLanguageChange: () => {}
}

class Footer extends React.Component {
  render() {
    const props =  this.props;
    
    const items = props.languages.map((item) =>
      <MenuItem value={item.code} key={item.code} primaryText={item.name} />
    )
    
    return (
      <Toolbar style={style}>
        <ToolbarGroup>
          <ToolbarTitle style={{color:'#667284', fontSize: '14px', lineHeight: '48px'}} text="© 2018 METRO Group" />
        </ToolbarGroup>
        <ToolbarGroup lastChild>
          <DropDownMenu value={props.selectedLanguage} onChange={props.onLanguageChange}>
            {items}
          </DropDownMenu>
        </ToolbarGroup>
      </Toolbar>
    )
  }
}


Footer.propTypes = propTypes
Footer.defaultProps = defaultProps

export default Footer