import React, {PropTypes} from 'react';
import {Card, CardText, CardHeader} from 'material-ui/Card';
import {getPanelStyle} from '../zutils/Stylist';
//todo do panel header Component

const propTypes = {
   fuiStyle: PropTypes.string,
   title: React.PropTypes.string,
   subtitle: React.PropTypes.string,

};

const defaultProps = {
  fuiStyle: 'info',
  title: '',
  subtitle: ''
};

class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false };
    }
    
    handleExpand = () => {
        this.setState({expanded: true});
    }

    render() {
        const props = this.props;
        const style = getPanelStyle(props.fuiStyle);
        const expand = this.props.initiallyExpanded || false;
        return (
            <Card className={style} initiallyExpanded={expand} style={{color:'#002D72'}}>
                <CardHeader className='fui-panel-header' title={props.title} subtitle={props.subtitle} actAsExpander={true}
                showExpandableButton={true} titleColor='#002D72' subtitleColor='#002D72'/>
                <CardText expandable={true}>
                {props.children}
                </CardText>
            </Card>
        )

    }
}

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;

export default Panel;