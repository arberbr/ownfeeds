import React from 'react';
import './FeedsList.css';

// Components
import FeedItem from "./FeedItem";

const feedsList = (props) => {
    
    let feedItems = props.feeds.map(feed => {
        return <FeedItem key={feed.link} clicked={props.clicked} feed={feed}/>
    });
    
    return (
        <div className="FeedsList">
            {feedItems}
        </div>
    );
};

export default feedsList;