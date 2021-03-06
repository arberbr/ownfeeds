import React from 'react';

import Logo from '../Logo/Logo';

const header = (props) => {
	return (
		<header>
			<Logo />
			<a href='/' className='mobile-menu-toggle' title='Toggle Menu' onClick={props.clicked}>
				Menu
			</a>
		</header>
	);
};

export default header;
