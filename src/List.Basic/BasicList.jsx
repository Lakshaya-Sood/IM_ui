import React, {Component, PropTypes} from 'react';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, key) => {
     this.props.onChange && this.props.onChange(event, key);
      this.setState({
        selectedIndex: key,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
          style={{padding: 0}}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);
const itemStyle = {
  borderBottom: 'solid 1px #efefef'
}

const activeItemStyle = {
  borderLeft: '4px solid #c74a1b',
  'background-color': '#F7F8F9',
  borderBottom: 'solid 1px #efefef'
}

export class BasicList extends React.Component {
    render() {
        const props = this.props;
        const divClassName = this.props.className ? ('card ' + this.props.className): 'card';

        const listItems = this.props.listItems.map((item, i) => (
          <ListItem
            value={item.key}
            leftAvatar={item.leftAvatar}
            rightIcon={item.rightIcon}
            primaryText={item.primaryText}
            secondaryText={item.secondaryText}
            children={item.children}
            disableTouchRipple={props.disableTouchRipple}
            disableFocusRipple={props.disableFocusRipple}
            style={item.key === props.defaultSelected? activeItemStyle : itemStyle}
            />
        ));

     return (
        <div className={divClassName} style={this.props.style}>
          <SelectableList
            defaultValue={props.defaultSelected} onChange={props.onChange}>
            <ListHeader title={props.title}/>
            {listItems}
          </SelectableList>
        </div>
      )
    }
}

export class ListHeader extends React.Component {
  render() {
    const props = this.props;
    return (
     <div>
        <Subheader className='font-light'
          style={{fontSize: '16px', color: '#666'}}>
          {props.title}
        </Subheader>
        <Divider/>
      </div>
    )
  }
}

export default BasicList;
