import React from 'react';
import './Navigation.css';

// Components
import NavigationItem from './NavigationItem/NavigationItem';

const navigation = (props) => {
    return (
        <div className="navigation-menu">
            <ul>
                <NavigationItem link="/login" name="Login" />
            </ul>
        </div>
    );
};

export default navigation;