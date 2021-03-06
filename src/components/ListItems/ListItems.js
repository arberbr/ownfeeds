import React from 'react';

import ListItem from './ListItem';
import LoadingItems from './LoadingItems';

const listItems = (props) => {
	// show loading status
	if (props.feeds.length === 0) {
		return <LoadingItems />;
	}

	let itemsList = props.feeds.map((item) => {
		return <ListItem key={item.id} item={item} />;
	});

	return <div className='list-items'>{itemsList}</div>;
};

export default listItems;
