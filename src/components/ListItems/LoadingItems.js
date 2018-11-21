import React from 'react';

const loadingItems = (props) => {
    return (
        <div className="list-items">
            <div className="card card-loading">
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
        </div>
    );
};

export default loadingItems;