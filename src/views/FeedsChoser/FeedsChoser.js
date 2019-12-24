import React, { Component } from 'react';
import './FeedsChoser.css';

import { FEEDS } from '../../data';

// Components
import Logo from '../../components/Logo/Logo';
import FeedsList from '../../components/FeedsList/FeedsList';

class FeedsChoser extends Component {
	state = {
		allFeeds: FEEDS
	};

	toggleFeedChosenStatus = feedId => {
		const oldAllFeeds = [...this.state.allFeeds];
		const feedItemIndex = this.state.allFeeds.findIndex(
			feed => feed.id === feedId
		);

		const chosenFeed = {
			...this.state.allFeeds[feedItemIndex]
		};

		chosenFeed.chosenStatus = !chosenFeed.chosenStatus;
		oldAllFeeds[feedItemIndex] = chosenFeed;

		this.setState({
			allFeeds: oldAllFeeds
		});
	};

	render() {
		return (
			<div className='FeedsChoser'>
				<Logo />
				<FeedsList
					clicked={this.toggleFeedChosenStatus}
					feeds={this.state.allFeeds}
				/>
			</div>
		);
	}
}

export default FeedsChoser;
