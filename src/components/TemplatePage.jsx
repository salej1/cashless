import React from 'react';
import ReactDOM from 'react-dom';
import ons from 'onsenui';
import { Page, Splitter, SplitterSide, List, ListHeader, ListItem,
    SplitterContent} from 'react-onsenui';
import SearchPage from './SearchPage';
import DetailPage from './DetailPage';
import SetupPage from './SetupPage';
import ActivatePage from './ActivatePage';
import ActivityPage from './ActivityPage';

class PageContent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {page: props.page};
    }

    render() {
        let comp = {};

        switch (this.state.page) {
            case "search":
                comp = <SearchPage parent={this}/>;
                break;
            case "detail":
                comp = <DetailPage parent={this}/>;
                break;
            case "setup":
                comp = <SetupPage parent={this}/>;
                break;
            case "activate":
                comp = <ActivatePage parent={this}/>;
                break;
            case "activity":
                comp = <ActivityPage parent={this}/>;
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
        this.state = {page: props.page};
    }

    render() {
        return(
        <Page>
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
                    <PageContent page={this.state.page}/>
                </SplitterContent>
            </Splitter>
        </Page>);
    }
}
