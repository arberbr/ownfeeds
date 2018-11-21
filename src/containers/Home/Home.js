import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';

// Components
import Aside from '../../components/Aside/Aside';
import Main from '../../components/Main/Main';

// Methods
import axios from 'axios';

const FEEDS = [
    {
        link: 'css-tricks.com',
        name: 'CSS-Tricks',
        url: 'https://css-tricks.com/wp-json/wp/v2/posts?per_page=10',
    },
    {
        link: 'blog.sucuri.net',
        name: 'Sucuri Blog',
        url: 'https://blog.sucuri.net/wp-json/wp/v2/posts?per_page=10',
    },
    {
        link: 'webdesignerdepot.com',
        name: 'Web Designer Depot',
        url: 'https://www.webdesignerdepot.com/wp-json/wp/v2/posts?per_page=10',
    },
    {
        link: 'kinsta.com',
        name: 'Kinsta',
        url: 'https://kinsta.com/wp-json/wp/v2/posts?per_page=10',
    },
    {
        link: 'codeinwp.com',
        name: 'CodeinWP',
        url: 'https://www.codeinwp.com/wp-json/wp/v2/posts?per_page=10',
    },
    {
        link: 'deliciousbrains.com',
        name: 'Delicious Brains',
        url: 'https://deliciousbrains.com/wp-json/wp/v2/posts?per_page=10',
    }
];

class Home extends Component {
    state = {
    	feeds: [],
        mobileMenuShown: false
    };

    componentDidMount() {

        let feeds = [];

        // retrieve and sort feeds data from feed sources
        FEEDS.map(feed => {
            return axios.get(feed.url).then(response => {

                for (let key in response.data) {
                    feeds.push(response.data[key]);
                }

                feeds.sort(function(a, b) {
                    return new Date(b.date) - new Date(a.date);
                });

                this.setState({feeds: feeds});

            }).catch(error => {
                console.log(error);
            });
        });

        this.setState({feeds: feeds});

    };

    filterFeedContentBySource = (event, source) => {
        event.preventDefault();

        this.setState({feeds: []});

        let feeds = [];
        axios.get(source).then(response => {
            for (let key in response.data) {
                feeds.push(response.data[key]);
            }
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
        return (
            <Aux>
                <Aside sources={FEEDS} clicked={this.filterFeedContentBySource} show={this.state.mobileMenuShown} />
                <Main feeds={this.state.feeds} clicked={this.toggleMobileMenu} />
            </Aux>
        );
    };

};

export default Home;