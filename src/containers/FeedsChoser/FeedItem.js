import React from 'react';

const feedItem = (props) => {
    return (
        <div className="FeedItem" onClick={() => props.clicked(props.feed.id)}>
            {props.feed.name}
        </div>
    );
};

export default feedItem;