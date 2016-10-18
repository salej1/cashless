import React from 'react';
import ReactDOM from 'react-dom';
import ons from 'onsenui';
import { Page, Input, Button, Icon} from 'react-onsenui';
import Controller from '../controller/Controller';

export default class ActivatePage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props || {};
        this.state = {waiting: false, gotConfirm: false};
        this.activateLater = this.activateLater.bind(this);
        this.renderProgress = this.renderProgress.bind(this);
        this.check = this.check.bind(this);
        this.confirmed = this.confirmed.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
        this.renderActivateLater = this.renderActivateLater.bind(this);
    }

    activateLater(){
        this.props.app.setState({pageIndex: 0})    ;
    }

    check(){
        this.setState({waiting: true});
        Controller.checkState()
    }

    confirmed(){
        this.setState({gotConfirm: true, waiting: false});
    }

    renderProgress(){
        if(this.state.waiting){
            setTimeout(this.confirmed, 2500);
            return(
                <div>
                    Waiting for confirmation... <Icon style={{marginLeft:"15px"}} icon="ion-load-c" spin/>
                </div>
            );
        }
        else if(this.state.gotConfirm){
            return(
                <div>
                    <p><Icon icon="ion-checkmark-circled" size="2x" style={{color: 'green'}}></Icon> Activation confirmed! </p>
                    <p>The cashless unit can now be used.</p>
                </div>
            );
        }
        else {
            return null;
        }
    }

    renderOptions(){
        if(this.state.gotConfirm === false){
            return(
                <div className="mid-wide-centered">
                    <Button onClick={this.check} style={{width: "250px", textAlign: "center"}}>Check <Icon modifier="large" icon="ion-loop"/></Button>
                </div>
            );
        }
        else{
            return null;
        }
    }

    renderActivateLater(){
        if(this.state.gotConfirm === false){
            return(
                <div className="mid-wide-centered">
                    <Button modifier="large" onClick={this.activateLater}>Activate Later</Button>
                </div>
            );
        }
        else{
            return null;
        }
    }

    render() {
        let later = this.renderActivateLater();
        let progress = this.renderProgress();
        let options = this.renderOptions();

        return (
          <Page style={{margin: "15px", fontFamily: "Source Sans Pro"}}>
                <div>
                <div>
                    {later}
                </div>
                    <p>In order to activate the cashless unit, follow these instructions:</p>
                    <ol className="instr">
                        <li>Open the machine door and locate the telemeter</li>
                        <li>Firmly press the B button once</li>
                        <li>At this point an audit call is being performed</li>
                        <li>Click on the Check button and wait for the activation confirmation to show up</li>
                    </ol>
                </div>
                <div>
                    {options}
                </div>
                <div>
                    <br/>
                    {progress}
                </div>
          </Page>
        );
    }
};
