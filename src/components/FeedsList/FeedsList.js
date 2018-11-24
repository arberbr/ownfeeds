import React from 'react';
import './FeedsList.css';

// Components
import FeedItem from "../../containers/FeedsChoser/FeedItem";

const feedsList = (props) => {
    const feed={
        id: 0,
        name: 'hello'
    };
    return (
        <div className="FeedsList">
            <FeedItem clicked={props.clicked} feed={feed}/>
        </div>
    );
};

export default feedsList;