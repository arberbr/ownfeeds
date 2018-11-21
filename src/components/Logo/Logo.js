import React from 'react';

import { Link } from 'react-router-dom';

const logo = (props) => {
    return (
        <Link to="/" className="logo-link" title="OwnFeeds - Feeds Reader">OwnFeeds</Link>
    );
};

export default logo;