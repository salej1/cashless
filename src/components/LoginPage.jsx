import React from 'react';
import {Page, Input, Button} from 'react-onsenui';
import Controller from '../controller/Controller';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.parent = props.parent;
        this.state = {"username": "", "password": ""}
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    onUserNameChange(e){
        this.setState({"username": e.target.value});
    }

    onPasswordChange(e){
        this.setState({"password": e.target.value});
    }

    onLogin(){
        this.parent.setState({
            "authorized": Controller.authenticate(this.state.username, this.state.password)
        });

        this.launchIntoFullscreen(document.documentElement);
    }

    launchIntoFullscreen(element) {
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

    render() {
        return (
            <Page>
                <div className="grad">
                    <div className="login-header">
                        <h1>Welcome</h1>
            			<div className="logo"></div>
                        <div>Cashless solutions</div>
            		</div>
                    <div className="login-frame">
                        <div className="login-message">Please Login</div><br/>
                        <div className="login-fields">
                            <Input modifier="underbar" float placeholder="username"
                                value={this.state.username} onChange={this.onUserNameChange}/><br/>
                            <Input type="password" float modifier="underbar" placeholder="password"
                                value={this.state.password} onChange={this.onPasswordChange}/><br/>
                            <div className="spacer-20"></div>
                            <Button modifier="large" onClick={this.onLogin}>Login</Button>
                            <Input type="checkbox" className="subMsg"> Keep me signed</Input>
                        </div>
                    </div>
                    <div className="subMsg"><a href="">I Forgot my password</a></div>
                </div>
            </Page>
        );
    }
};
