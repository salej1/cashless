import React from 'react';
import ReactDOM from 'react-dom';
import ons from 'onsenui';
import { Page, Input, Button, Icon, List, ListItem, Dialog} from 'react-onsenui';
import Controller from '../controller/Controller';

export default class ActivityPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {callList: this.getCallList(), dialogShown:false, dialogDetail:{}};
        this.renderRow = this.renderRow.bind(this);
        this.onCallClick = this.onCallClick.bind(this);
        this.hideDialog = this.hideDialog.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
    }

    getCallList(){
        let activity = Controller.getCallHistory();
        return activity;
    }

    onCallClick(key){
        this.setState({dialogShown:true, dialogDetail: this.state.callList[0]});
    }

    hideDialog(){
        this.setState({dialogShown: false});
    }

    renderRow(row, index){
        return(
            <ListItem key={index} onClick={this.onCallClick} tappable="true">
                <div style={{width: "300px"}}><span style={{color: "#3a5a8e"}}>{row.callType}</span> at {row.dateTime}</div>
                <div style={{width: "200px"}}>RSSI: {row.rssi} </div>
                <div style={{width: "200px"}}>Alarms: {row.alarms} </div>
            </ListItem>
        );
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

    render() {
        let header = this.renderHeader();
        return (
          <Page>
              <Dialog
                  isOpen={this.state.dialogShown}
                  isCancelable={true}
                  onCancel={this.hideDialog}>
                  <div style={{textAlign: 'center', margin: '10px'}}>
                    <div style={{textAlign: "center"}}>Call Details:<br/></div>
                    <div className="spacer"></div>
                    <div className="tab-row" style={{textAlign: "left", fontSize: "0.8em"}}>
                        <div className="tab-what-short">Type:</div> <div  className="tab-val">{this.state.dialogDetail.callType}</div>
                    </div>
                    <div className="tab-row" style={{textAlign: "left", fontSize: "0.8em"}}>
                        <div className="tab-what-short">Date-time:</div> <div  className="tab-val">{this.state.dialogDetail.dateTime}</div>
                    </div>
                    <div className="tab-row" style={{textAlign: "left", fontSize: "0.8em"}}>
                        <div className="tab-what-short">RSSI:</div> <div  className="tab-val">{this.state.dialogDetail.rssi}</div>
                    </div>
                    <div className="tab-row" style={{textAlign: "left", fontSize: "0.8em"}}>
                        <div className="tab-what-short">Alarms:</div> <div  className="tab-val">{this.state.dialogDetail.alarms}</div>
                    </div>
                    <div className="tab-row" style={{textAlign: "left", fontSize: "0.8em"}}>
                        <div className="tab-what-short">DEX:</div> <div  className="tab-val">DEX available</div>
                    </div>
                    <p>
                      <Button onClick={this.hideDialog}>Close</Button>
                    </p>
                  </div>
              </Dialog>
              <div style={{margin: "20px"}}>
                  {header}
              </div>
              <List dataSource={this.state.callList} renderRow={this.renderRow}></List>
          </Page>
        );
    }
};
