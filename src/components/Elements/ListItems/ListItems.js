import React from 'react';

import ListItem from './ListItem/ListItem';

const listItems = (props) => {

    // show loading status
    if(props.feeds.length === 0) {
        return (
            <div className="card">
                <div>
                    <div className="loading-date"></div>
                </div>
                <div>
                    <div className="loading-title"></div>
                </div>
                <div>
                    <div className="loading-link"></div>
                </div>
            </div>
        );
    }

    let itemsList = props.feeds.map(item => {
        return <ListItem key={item.id} item={item} />
    });

    return (
        <div className="list-items">
            {itemsList}
        </div>
    );

};

export default listItems;