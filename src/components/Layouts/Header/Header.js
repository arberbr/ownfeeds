import React from 'react';

import Logo from '../../Elements/Logo/Logo';

const header = (props) => {
    return (
        <header>
            <Logo />
            <a href="/" className="mobile-menu-toggle" title="Toggle Menu" onClick={(event) => props.clicked(event)}>Menu</a>
        </header>
    );
};

export default header;