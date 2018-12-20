import * as actionTypes from '../actions/actionTypes';

const initialState = {
	feeds: [],
	mobileMenuShown: false
};

const loadFeeds = (state, action) => {

};

const updateFeeds = (state, action) => {

};

const filterFeeds = (state, action) => {

};

const reducer = (state = initialState, action) => {
	
	switch(action.type) {
		case actionTypes.LOAD_FEEDS : return loadFeeds(state, action);
		case actionTypes.UPDATE_FEEDS : return updateFeeds(state, action);
		case actionTypes.FILTER_FEEDS : return filterFeeds(state, action);
		default: return state;
	}
	
};

export default reducer;