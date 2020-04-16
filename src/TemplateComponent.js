import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = (theme) => {

}

class TemplateComponent extends Component {
    constructor() {
        this.state={}
    }

    render() {
        return <div></div>
    }
}

export default withStyles(styles)(TemplateComponent);