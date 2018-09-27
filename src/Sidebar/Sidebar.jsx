import React, {PropTypes} from 'react'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import NavigationClose from '../svg-icons/Close'
import HamburgerMenu from '../svg-icons/Menu'
import { FuiTheme } from '../zutils/StyleConfig';

const propTypes = {
    width: PropTypes.number,
    options: PropTypes.object
};

const defaultProps = {
    width: 300,
    options: {}
};

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

    render() {
        const props = this.props;

        return (
            <div>
                <IconButton
                    style={{height: '80px'}}
                    iconStyle={{height: '32px', width: '32px', margin:'0 auto'}} 
                    onClick={this.handleToggle}>
                    <div><HamburgerMenu /></div>
                </IconButton>
                
                <Drawer
                    containerStyle={FuiTheme.sidebar}
                    className='sidebar-menu'
                    containerClassName='sidebar-menu'
                    docked={false}
                    width={props.width}
                    onRequestChange={(open) => this.setState({ open }) }
                    open={this.state.open}>
                    <div>
                        <IconButton  className='pull-right' onClick={this.handleToggle}>
                            <NavigationClose className='sidebar-close-icon'/>
                        </IconButton>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        {props.children || null}
                    </div>
                </Drawer>
            </div>
        );
    }
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;
