import React from 'react';

// Helpers
import { formatDate } from "../../shared/helpers";

const listItem = (props) => {
    return (
        <div className="card">
            <div className="post-date">
                <span>Published on {formatDate(props.item.date)}</span>
            </div>
            <div className="post-title">
                <h2>
                    <a href={props.item.link} target="_blank" rel="noopener noreferrer" title={props.item.title.rendered} dangerouslySetInnerHTML={{ __html: props.item.title.rendered }}></a>
                </h2>
            </div>
            <div className="post-link">
                <span>{props.item.link}</span>
            </div>
        </div>
    );
};

export default listItem;