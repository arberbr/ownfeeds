import * as actionTypes from './actionTypes';

export const loadFeeds = () => {
	return {
		type: actionTypes.LOAD_FEEDS,
	};
};

export const updateFeeds = () => {
	return {
		type: actionTypes.UPDATE_FEEDS
	}
};

export const filterFeeds = sourceId => {
	return {
		type: actionTypes.FILTER_FEEDS,
		sourceId: sourceId
	}
};