import React from 'react';
import ReactDOM from 'react-dom';
import ons from 'onsenui';
import {Navigator, Page, Tab, Tabbar} from 'react-onsenui';
import LoginPage from './components/LoginPage';
import TemplatePage from './components/TemplatePage';
const initialPlatform = ons.platform.isAndroid() ? 'android' : 'ios';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.props = props || {};
        this.state = {pageIndex: 0, mdpDetails: []};
        this.renderTabs = this.renderTabs.bind(this);
    }

    renderTabs(){
        return [
            {
                content: <TemplatePage page="Search" app={this}/>,
                tab: <Tab label="Search" icon="ion-ios-search"/>,
                key: 1
            }, {
                content: <TemplatePage page="Detail" app={this}/>,
                tab: <Tab label="Details" icon="ion-ios-paper-outline"/>,
                key: 2
            }, {
                content: <TemplatePage page="Setup" app={this}/>,
                tab: <Tab label="Setup" icon="ion-ios-gear-outline"/>,
                key: 3
            }, {
                content: <TemplatePage page="Activate" app={this}/>,
                tab: <Tab label="Activate" icon="ion-ios-color-wand-outline"/>,
                key: 4
            }, {
                content: <TemplatePage page="Activity" app={this}/>,
                tab: <Tab label="Activity" icon="ion-ios-pulse"/>,
                key: 5
            }
        ];
    }

    render() {
        return (
            <Page>
              <Tabbar
                renderTabs={this.renderTabs}
                index = {this.state.pageIndex}
              />
            </Page>
        );
    }
};

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"authorized": false};
    }

    renderPage(route, navigator){
        route.props = route.props || {};
        route.props.navigator = navigator;

        return React.createElement(route.comp, route.props);
    }

    render() {
        if(this.state.authorized === false){
            return (<LoginPage parent={this}/>);
        }
        else{
            return(
                <Navigator
                    initialRoute={{comp: Tabs, key: 0}}
                    renderPage={this.renderPage}
                    key="1"
              />
          );
        }
    }
}
