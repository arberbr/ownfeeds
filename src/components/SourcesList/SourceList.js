import React from 'react';

const sourceList = (props) => {
	return (
		<li>
			<a
				onClick={(event) => props.clicked(event, props.source.url)}
				href={props.source.link}
				title={props.source.name}
			>
				{props.source.name}
			</a>
		</li>
	);
};

export default sourceList;
