import React from 'react';
import ReactDOM from 'react-dom';
import ons from 'onsenui';
import {Toolbar, BackButton, ToolbarButton, Splitter,
    SplitterSide, SplitterContent, Page} from 'react-onsenui';

export default class AppToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "isOpen": false };
    }

    hide() {
        this.setState({
          isOpen: false
        });
    }

    show() {
        this.setState({
          isOpen: true
        });
    }

    render() {
        return (
            <Toolbar>
                <div className='left'>
                    <BackButton>Back</BackButton>
                </div>
                <div className='center'>
                    {this.props.pageName}
                </div>
                <div className='right'>
                    <ToolbarButton onClick={this.show.bind(this)}>
                        <Icon icon='ion-navicon, material:md-menu'/>
                    </ToolbarButton>
                </div>
            </Toolbar>

        );
    }
};
