import React from 'react';

import SourcesList from '../../Elements/SourcesList/SourcesList';
import Credits from '../../Elements/Credits/Credits';
import Logo from '../../Elements/Logo/Logo';

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