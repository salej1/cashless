import React from 'react';
import ReactDOM from 'react-dom';
import ons from 'onsenui';
import {Page, Button} from 'react-onsenui';
import Controller from '../controller/Controller';

export default class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        this.props = props || {};
        this.state = {
            mdpDetails: props.info
        };
    }

    renderPage(){
        if(typeof(this.state.mdpDetails) !== "undefined"){
            let mdp = this.state.mdpDetails[0];
            return(
                <Page style={{margin: "15px", fontFamily: "Source Sans Pro"}}>
                    <div>
                        Please review the telemeter detailed information:
                    </div>
                    <div style={{marginTop: "15px", marginBottom: "15px"}}>
                        <strong>Phys Id:</strong>
                        <span className="highlight">{mdp.physId}</span>
                    </div>
                    <div className="tab-row">
                        <span className="tab-what">Type:</span> <span  className="tab-val">{mdp.type}</span>
                    </div>
                    <div className="tab-row">
                        <span className="tab-what">S.N.:</span> <span  className="tab-val">{mdp.sn}</span>
                    </div>
                    <div className="tab-row">
                        <span className="tab-what">Last Call:</span> <span  className="tab-val">{mdp.lasc}</span>
                    </div>
                    <div className="tab-row">
                        <span className="tab-what">Last RSSI:</span> <span  className="tab-val">{mdp.lasr}</span>
                    </div>
                    <div className="tab-row">
                        <span className="tab-what">Cashless:</span> <span  className="tab-val">{mdp.cash}</span>
                    </div>
                    <div className="tab-row">
                        <span className="tab-what">Pending Update:</span> <span  className="tab-val">{mdp.pu}</span>
                    </div>
                    <div style={{width: "100%"}}>
                        <div className="mid-wide-centered">
                            <Button modifier="large" style={{width: "250px"}}>Link</Button>
                        </div>
                    </div>
                    <div style={{width: "100%"}}>
                        <div className="mid-wide-centered">
                            <Button modifier="large" style={{width: "250px"}}>Activate</Button>
                        </div>
                    </div>
                </Page>
            );
        }
        else{
            return(
                <Page>

                </Page>
            );
        }
    }
    render() {
        return this.renderPage();
    }
};
