import React from 'react';
import ReactDOM from 'react-dom';
import ons from 'onsenui';
import {Navigator, Page, Tab, Tabbar} from 'react-onsenui';
import LoginPage from './components/LoginPage';
import SearchPage from './components/SearchPage';
import DetailPage from './components/DetailPage';
import SetupPage from './components/SetupPage';
import ActivatePage from './components/ActivatePage';
import ActivityPage from './components/ActivityPage';
const initialPlatform = ons.platform.isAndroid() ? 'android' : 'ios';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.props = props || {};
        this.state = {};
        this.renderTabs = this.renderTabs.bind(this);
    }

    renderTabs(){
        return [
            {
                content: <SearchPage navigator={this.props.navigator}/>,
                tab: <Tab label="Search" icon="ion-ios-search"/>
            }, {
                content: <DetailPage navigator={this.props.navigator}/>,
                tab: <Tab label="Details" icon="ion-ios-paper-outline"/>
            }, {
                content: <SetupPage navigator={this.props.navigator}/>,
                tab: <Tab label="Setup" icon="ion-ios-gear-outline"/>
            }, {
                content: <ActivatePage navigator={this.props.navigator}/>,
                tab: <Tab label="Activate" icon="ion-ios-color-wand-outline"/>
            }, {
                content: <ActivityPage navigator={this.props.navigator}/>,
                tab: <Tab label="Activity" icon="ion-ios-pulse"/>
            }
        ];
    }

    render() {
        return (
            <Page>
              <Tabbar
                renderTabs={this.renderTabs}
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
                    initialRoute={{comp: Tabs}}
                    renderPage={this.renderPage}
              />
          );
        }
    }
}
