import React, { Component } from 'react';
import { FEEDS } from '../../data';

// Packages, Methods and Helpers
import axios from 'axios';

// Components
import Logo from '../../components/Logo/Logo';
// import Navigation from '../../components/Navigation/Navigation';
import SourcesList from '../../components/SourcesList/SourcesList';
import Credits from '../../components/Credits/Credits';
import Header from '../../components/Header/Header';
import ListItems from '../../components/ListItems/ListItems';

class Home extends Component {
	state = {
		feeds: [],
		mobileMenuShown: false
	};

	componentDidMount() {
		let feeds = [];
		FEEDS.map(feed => {
			return axios
				.get(feed.url)
				.then(response => {
					for (let key in response.data)
						feeds.push(response.data[key]);
					feeds.sort(function(a, b) {
						return new Date(b.date) - new Date(a.date);
					});
					this.setState({ feeds: feeds });
				})
				.catch(error => {
					console.log(error);
				});
		});
	}

	componentWillUnmount() {
		this.setState({ feeds: [] });
	}

	filterFeedContentBySource = (event, source) => {
		event.preventDefault();
		this.setState({ feeds: [] });
		let feeds = [];
		axios
			.get(source)
			.then(response => {
				for (let key in response.data) feeds.push(response.data[key]);
				this.setState({ feeds: feeds });
			})
			.catch(error => {
				console.log(error);
			});
	};

	toggleMobileMenu = event => {
		event.preventDefault();
		this.setState(prevState => ({
			mobileMenuShown: !prevState.mobileMenuShown
		}));
	};

	render() {
		let asideClasses = [];
		if (this.state.mobileMenuShown) asideClasses.push('active');

		let items;
		if (navigator.onLine) {
			items = <ListItems feeds={this.state.feeds} />;
		} else {
			items = (
				<div className='error-notification'>
					<h2>Error: No internet connection active!</h2>
				</div>
			);
		}

		return (
			<>
				<aside className={asideClasses.join(' ')}>
					<Logo />
					{/* <Navigation /> */}
					<SourcesList
						sources={FEEDS}
						clicked={this.filterFeedContentBySource}
					/>
					<Credits />
				</aside>
				<main>
					<Header clicked={this.toggleMobileMenu} />
					{items}
				</main>
			</>
		);
	}
}

export default Home;
