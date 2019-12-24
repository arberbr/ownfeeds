import React from 'react';

import SourceList from './SourceList';

const sourcesList = props => {
	let sourcesItems = props.sources.map(source => {
		return (
			<SourceList
				key={source.link}
				source={source}
				clicked={props.clicked}
			/>
		);
	});

	return (
		<div className='sources-box'>
			<ul className='sources-list'>{sourcesItems}</ul>
		</div>
	);
};

export default sourcesList;
