import React from 'react';
import ReactDOM from 'react-dom';
import ons from 'onsenui';
import { Page, Input, Button, Icon} from 'react-onsenui';

export default class ActivatePage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props || {};
        this.state = {};
        this.activateLater = this.activateLater.bind(this);
    }

    activateLater(){
        this.props.App.setState({pageIndex: 0})    ;
    }

    render() {
        return (
          <Page style={{margin: "15px", fontFamily: "Source Sans Pro"}}>
                <div>
                <div>
                    <Button modifier="large" onClick={this.activateLater}>Activate Later</Button>
                </div>
                    <p>In order to activate the cashless, please follow these instructions:</p>
                    <ol className="instr">
                        <li>Open the machine door and locate the ADV5000</li>
                        <li>Firmly press the B button once</li>
                        <li>At this point an audit call is being performed</li>
                        <li>Click on the Check button and wait for the activation confirmation to show up</li>
                    </ol>
                </div>
                <div className="mid-wide-centered">
                    <Button onClick="">Check <Icon modifier="large" icon="ion-loop"/></Button>
                </div>
          </Page>
        );
    }
};
