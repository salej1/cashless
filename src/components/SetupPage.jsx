import React from 'react';
import ReactDOM from 'react-dom';
import ons from 'onsenui';
import { Page, Input, Button, Icon, Modal, ProgressCircular } from 'react-onsenui';
import Controller from '../controller/Controller';

export default class SetupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {details: [], physId: "", type: "", text: "", msg: "", searched: false, creating: false};
        this.onSearch = this.onSearch.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.renderDetails = this.renderDetails.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onAssignClick = this.onAssignClick.bind(this);
        this.onActivateClick = this.onActivateClick.bind(this);
    }

    onCancelClick(){
        this.props.app.setState({pageIndex: 1});
    }

    onAssignClick(){
        ons.notification.confirm('Do you confirm the assignation of telemeter ' +
            this.props.app.state.mdpDetails[0].physId + "?").then((res)=>{
            if(res === 1){
                ons.notification.alert("Assignation successful. Now the cashless unit needs to be activated.");
                this.props.app.setState({pageIndex: 3});
            }
        });
    }

    onActivateClick(){
        this.props.app.setState({pageIndex: 3});
    }

    onSearch(){
        this.setState({details: res, searched: false});
        let res = Controller.searchLocation(this.state.text);
        this.setState({details: res, searched: true});
    }

    onSearchChange(e){
        this.state.text = e.target.value;
    }

    renderDetails(){
        if(this.state.searched == false){
            return null;
        }

        if(this.state.details.length > 0){
            let loc = this.state.details[0];
            return(
                <div>
                    <div>
                        <p><Icon icon="ion-location" size="32"></Icon> Location found</p>
                    </div>
                    <div>
                        <div className="tab-what">Customer:</div> <div className="tab-val">{loc.cust}</div>
                    </div>
                    <div>
                        <div className="tab-what">Location:</div> <div className="tab-val">{loc.loc}</div>
                    </div>
                    <div>
                        <div className="tab-what">Machine:</div> <div className="tab-val">{loc.asset}</div>
                    </div>
                    <div>
                        <div className="tab-what">Type:</div> <div className="tab-val">{loc.type}</div>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div style={{marginTop: "25px"}}>
                    No matches found
                </div>
            );
        }
    }

    renderHeader(){
        if(this.props.app.state.mdpDetails.length > 0){
            let type = this.props.app.state.mdpDetails[0].type;
            let id = this.props.app.state.mdpDetails[0].physId;
            return(
                 <div>
                     <strong>Phys Id: </strong> <span className="highlight">{id}</span>
                 </div>
                 );
        }
    }

    renderOptions(){
        if(this.state.searched && this.state.details.length > 0 && this.state.details[0].status === "none"){
            return(
                <div>
                    <div style={{marginTop: "15px"}}>
                        <p>Please review the location details and click Assign to link the telemeter</p>
                    </div>
                    <div style={{width: "100%"}}>
                        <div className="mid-wide-centered">
                            <Button modifier="large" style={{width: "250px"}} onClick={this.onAssignClick}>Assign</Button>
                        </div>
                    </div>
                </div>
            );
        }
        else if(this.state.searched && this.state.details.length > 0 && this.state.details[0].status === "assigned"){
            return(
                <div style={{width: "100%", marginTop: "15px"}}>
                    <Icon icon="ion-alert-circled" style={{color: "blue"}}></Icon> The telemeter is already assigned to this location
                    <div className="mid-wide-centered">
                        <Button modifier="large" style={{width: "250px"}} onClick={this.onActivateClick}>Activate</Button>
                    </div>
                </div>
            );
        }
        else{
            return null;
        }
    }

    render() {
        this.header = this.renderHeader();
        this.details = this.renderDetails();
        this.options = this.renderOptions();

        return (
         <Page style={{margin: "15px", fontFamily: "Source Sans Pro"}}>
             <div>
                 <Modal isOpen={this.state.creating}>
                     <p style={{textAlign:'center'}}>Updating...</p>
                     <div className="center">
                         <ProgressCircular indeterminate/>
                     </div>
                 </Modal>
             </div>
             <div>
                 {this.header}
             </div>
             <div>
                 <Input modifier="underbar" placeHolder="Location ID" onChange={this.onSearchChange}></Input>
                 <Button onClick={this.onSearch}><Icon icon='ion-search'></Icon></Button>
             </div>
                {this.details}
             <div>
             <div>
                 {this.options}
             </div>
             </div>
         </Page>
        );
    }
};
