import React from 'react';

import { Link } from 'react-router-dom';

const navigationItem = (props) => {
    return (
        <li>
            <Link to={props.link} title={props.name}>{props.name}</Link>
        </li>
    );
};

export default navigationItem;