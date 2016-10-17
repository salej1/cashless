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
    }

    onCancelClick(){
        this.props.app.setState({pageIndex: 1});
    }

    onAssignClick(){
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
                    <div className="tab-what">Customer:</div> <div className="tab-val">{loc.cust}</div>
                    <div className="tab-what">Location:</div> <div className="tab-val">{loc.loc}</div>
                    <div className="tab-what">Machine:</div> <div className="tab-val">{loc.asset}</div>
                    <div  className="tab-val">{loc.type}</div>
                </div>
            );
        }
        else{
            return (
                <div>
                    No matches found
                </div>
            );
        }
    }

    renderHeader(){
        debugger;
        if(this.props.app.state.mdpDetails.length > 0){
            let type = this.props.app.state.mdpDetails[0].type;
            let id = this.props.app.state.mdpDetails[0].physId;
            return(
                 <div>
                     Setup {type} <span className="highlight">{id}</span>
                 </div>
                 );
        }
    }

    renderOptions(){
        if(this.state.searched){
            return(
                <div style={{width: "100%"}}>
                    <div className="mid-wide-centered">
                    <Button modifier="large" style={{width: "250px"}} onClick={this.onAssignClick}>Assign</Button>
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
