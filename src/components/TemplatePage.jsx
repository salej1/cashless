import React from 'react';
import ReactDOM from 'react-dom';
import ons from 'onsenui';
import { Page, Splitter, SplitterSide, List, ListHeader, ListItem,
    SplitterContent, Toolbar, ToolbarButton, Icon} from 'react-onsenui';
import SearchPage from './SearchPage';
import DetailPage from './DetailPage';
import SetupPage from './SetupPage';
import ActivatePage from './ActivatePage';
import ActivityPage from './ActivityPage';

class PageContent extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {};
    }

    render() {
        let comp = {};

        switch (this.props.page) {
            case "Search":
                comp = <SearchPage app={this.props.app}/>;
                break;
            case "Detail":
                comp = <DetailPage app={this.props.app}/>;
                break;
            case "Setup":
                comp = <SetupPage app={this.props.app}/>;
                break;
            case "Activate":
                comp = <ActivatePage app={this.props.app}/>;
                break;
            case "Activity":
                comp = <ActivityPage app={this.props.app}/>;
                break;
            default:
                return <div></div>;
        }

        return comp;
    }
}

export default class TemplatePage extends React.Component{
    constructor(props) {
        super(props);
        this.props = props || {};
        this.state = {};
        this.renderToolbar = this.renderToolbar.bind(this);
    }

    renderToolbar(){
        return(
            <Toolbar>
                <div className='left'>
                </div>
                <div className='center'>
                    {this.props.page}
                </div>
                <div className='right'>
                    <ToolbarButton onClick={this.show}>
                        <Icon icon='ion-navicon, material:md-menu'/>
                    </ToolbarButton>
                </div>
            </Toolbar>
        );
    }

    render() {
        return(
        <Page renderToolbar={this.renderToolbar}>
            <Splitter>
                <SplitterSide
                  side='right'
                  isOpen={this.state.menuOpen}
                  onClose={this.hide}
                  onOpen={this.show}
                  collapse={true}
                  width={240}
                  isSwipeable={true}>
                  <Page>
                    <List
                      dataSource={[1]}
                      renderHeader={() => <ListHeader>Menu</ListHeader>}
                      renderRow={(i) => <ListItem modifier='longdivider' tappable>{"Logout"}</ListItem>}
                    />
                  </Page>
                </SplitterSide>
                <SplitterContent>
                    <PageContent page={this.props.page} app={this.props.app}/>
                </SplitterContent>
            </Splitter>
        </Page>);
    }
}
