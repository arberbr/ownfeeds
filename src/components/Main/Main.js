import React from 'react';

import Header from '../Header/Header';
import ListItems from '../ListItems/ListItems';

const main = (props) => {
    return (
        <main>
            <Header clicked={props.clicked} />
            <ListItems feeds={props.feeds} />
        </main>
    );
};

export default main;