import React from 'react';

import SourcesList from '../SourcesList/SourcesList';
import Credits from '../Credits/Credits';
import Logo from '../Logo/Logo';

const aside = (props) => {

    let classes = '';
    if(props.show) classes = 'active';

    return (
        <aside className={classes}>
            <Logo />
            <SourcesList sources={props.sources} clicked={props.clicked} />
            <Credits />
        </aside>
    );

};

export default aside;