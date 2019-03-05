import React, { Component } from 'react';
import { FEEDS } from '../../data';

// Packages, Methods and Helpers
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Higher Order Components
import Aux from '../../hoc/Auxiliary';

// Import Redux Actions
import * as actions from '../../store/actions/index';

// Components
import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import SourcesList from '../../components/SourcesList/SourcesList';
import Credits from "../../components/Credits/Credits";
import Header from "../../components/Header/Header";
import ListItems from "../../components/ListItems/ListItems";

class Home extends Component {

    state = {
    	feeds: [],
        mobileMenuShown: false
    };

    componentDidMount() {
        let feeds = [];
        FEEDS.map(feed => {
            return axios.get(feed.url).then(response => {
                for (let key in response.data) feeds.push(response.data[key]);
                feeds.sort(function(a, b) {
                    return new Date(b.date) - new Date(a.date);
                });
                this.setState({feeds: feeds});
            }).catch(error => {
                console.log(error);
            });
        });
    };

    filterFeedContentBySource = (event, source) => {
        event.preventDefault();
        this.setState({feeds: []});
        let feeds = [];
        axios.get(source).then(response => {
            for (let key in response.data) feeds.push(response.data[key]);
            this.setState({feeds: feeds});
        }).catch(error => {
            console.log(error);
        });
    };

    toggleMobileMenu = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            mobileMenuShown: !prevState.mobileMenuShown
        }));
    };

    render() {

        let asideClasses = [];
        if(this.state.mobileMenuShown) asideClasses.push('active');

        return (
            <Aux>
                <aside className={ asideClasses.join(' ') }>
                    <Logo />
                    <Navigation />
                    <SourcesList sources={FEEDS} clicked={this.filterFeedContentBySource} />
                    <Credits />
                </aside>
                <main>
                    <Header clicked={this.toggleMobileMenu} />
                    <ListItems feeds={this.state.feeds} />
                </main>
            </Aux>
        );

    };

}

const mapStateToProps = state => {
    return {
        feeds: state.allFeeds
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadFeeds: () => dispatch(actions.loadFeeds()),
        onFilterFeeds: (sourceId) => dispatch(actions.filterFeeds(sourceId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));