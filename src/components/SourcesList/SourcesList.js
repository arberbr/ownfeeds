import React from 'react';

import SourceList from './SourceList/SourceList';

const sourcesList = (props) => {

    let sourcesItems = props.sources.map(source => {
        return <SourceList key={source.link} source={source} clicked={props.clicked} />
    });

    return (
        <div className="sources-box">
            <h3>Featured</h3>
            <ul className="sources-list">
                {sourcesItems}
            </ul>
        </div>
    );
};

export default sourcesList;