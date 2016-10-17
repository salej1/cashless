import React from 'react';
import ReactDOM from 'react-dom';
import ons from 'onsenui';
import { Page, Toolbar, Input, Button, Modal,
        ProgressCircular, Icon, ToolbarButton} from 'react-onsenui';
import Controller from '../controller/Controller';
import DetailPage from './DetailPage';

export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props || {};
        this.state = {
            "searching": false,
            "nomatch": "",
            "text": "",
            "menuOpen": false
        };

        this.onSearch = this.onSearch.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);
    }

    hide() {
        this.setState({ "menuOpen": false });
    }

    show() {
        this.setState({ "menuOpen": true });
    }

    renderToolbar(){
        return(
            <Toolbar>
                <div className='left'>
                </div>
                <div className='center'>
                    Search
                </div>
                <div className='right'>
                    <ToolbarButton onClick={this.show}>
                        <Icon icon='ion-navicon, material:md-menu'/>
                    </ToolbarButton>
                </div>
            </Toolbar>
        );
    }

    onInputChange(e){
        this.setState({"text": e.target.value});
    }

    onSearch(){
        this.setState({"searching": true});
        let res = Controller.search(this.state.text);
        this.setState({"searching": false});
        if(res.length > 0){
            this.props.parent.setState({page: "detail", info: res});
        }
        else{
            this.setState({"nomatch": "No matches found"});
        }
    }

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <Modal isOpen={this.state.searching}>
                    <p style={{textAlign:'center'}}>Searching...</p>
                    <div className="center">
                        <ProgressCircular indeterminate/>
                    </div>
                </Modal>
                <div className="spacer"></div>
                <p style={{textAlign:"center"}}>Please type the telemeter Phys ID:</p>
                <div className="spacer"></div>
                <p style={{textAlign:"center"}}>
                    <Input value={this.state.text} modifier="underbar" placeHolder="PHYS ID"
                        onChange={this.onInputChange}></Input>
                    <Button onClick={this.onSearch}><Icon icon='ion-search'></Icon></Button>
                </p>
                <div style={{marginTop: "30px", textAlign: "center"}}>
                    {this.state.nomatch}
                </div>
            </Page>
        );
    }
};
