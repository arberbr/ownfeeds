import React from 'react';

const feedItem = (props) => {
   
    let classes = ['FeedItem'];
    
    if(props.feed.chosenStatus) {
        classes.push('chosen');
    }
    
    return (
        <div className={ classes.join(' ') } onClick={() => props.clicked(props.feed.id)}>
            {props.feed.name}
        </div>
    );
};

export default feedItem;