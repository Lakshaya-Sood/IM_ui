import React, {PropTypes} from 'react'
import Drawer from 'material-ui/Drawer'
import SidelleTitle from './SidelleTitle'
import IconButton from 'material-ui/IconButton'

const propTypes = {
    title: PropTypes.string,
    width: PropTypes.number,
    containerStyle: PropTypes.object,
    overlayStyle: PropTypes.object,
    onRequestChange: PropTypes.func
}

const defaultProps = {
    title: '',
    width: 392,
    containerStyle: {},
    overlayStyle: {},
    onRequestChange: () =>{}
}

class Sidelle extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            open: false
        }
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => {
        this.setState({ open: false });
        this.props.onRequestChange( false )
    }
    
    onRequestChange = ( open ) => {
        this.setState({ open })
        this.props.onRequestChange( open )
    }

    render() {
        const props = this.props
        
        const style = {
            'background-color': 'fff',
            boxShadow: '0 8px 32px 0 rgba(3,22,51,0.20)',
            zIndex: '1298'  
        }
        
        const containerStyle = Object.assign({}, style, props.containerStyle)
        const overlayStyle = Object.assign({}, {opacity: 0}, props.overlayStyle)
        return (
            <Drawer
                docked={false}
                zDepth={4}
                containerClassName= { props.containerClassName }
                containerStyle={ containerStyle }
                overlayStyle={ overlayStyle }
                width={ props.width }
                onRequestChange={ this.onRequestChange }
                open={this.state.open}
                openSecondary={props.openSecondary}>
                <div>
                    <SidelleTitle title={props.title} onClick={this.handleClose}/>
                   
                    { props.children }
                   
                </div>
            </Drawer>
        );
    }
}

Sidelle.propTypes = propTypes;
Sidelle.defaultProps = defaultProps;

export default Sidelle;