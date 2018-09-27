import React, {PropTypes} from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

const propTypes = {
   open: PropTypes.boolean,
   message: PropTypes.string,
   duration: PropTypes.string,
   fuistyle: PropTypes.string
};

const defaultProps = {
  open: false,
  duration: 4000,
};

const style = {
  top: '80px',
};

class SnackBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      message: '',
      fuistyle: 'success'
    };
  }

  warning = (msg) => {
     this.setState({
         open: true,
         message: msg,
        fuistyle: 'warning'
     });
  };

  success = (msg, isShow) => {
     this.setState({
         open: true,
         message: msg,
        fuistyle: 'success'
     });
  };

  info = (msg, isShow) => {
     this.setState({
         open: true,
         message: msg,
        fuistyle: 'info'
     });
  };

  primary = (msg, isShow) => {
     this.setState({
         open: true,
         message: msg,
        fuistyle: 'primary'
     });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {

       let props = this.props;
       const state = this.state;

       return (
            <div>
                <Snackbar
                    open={state.open}
                    message={state.message}
                    className={'snack-bar-' + state.fuistyle}
                    style={style}
                    autoHideDuration={props.duration || defaultProps.duration}                    
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }
}

SnackBar.propTypes = propTypes;
SnackBar.defaultProps = defaultProps;
export default SnackBar;
