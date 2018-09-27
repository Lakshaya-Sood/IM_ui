import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {FuiTheme} from '../zutils/StyleConfig';

const propTypes = {
  trigger: React.PropTypes.func
};

const defaultProps = {
  trigger: null
};

class FuiPopover extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
    this.renderTrigger = this.renderTrigger.bind(this);
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
    this.props.onRequestClose && this.props.onRequestClose();
  };

  renderTrigger() {
   return (
   <span onClick={this.handleTouchTap}>
    {this.props.trigger}
   </span>
   )
  }

  render() {
    return (
      <span>
        {this.renderTrigger()}
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={this.props.animation}
          style={this.props.popoverStyle}
        >
          {this.props.children}
        </Popover>
      </span>
    );
  }
}

FuiPopover.propTypes = propTypes;
FuiPopover.defaultProps = defaultProps;

export default FuiPopover;
