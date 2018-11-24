import React from 'react';
import './Navigation.css';

// Components
import NavigationItem from './NavigationItem';

const navigation = (props) => {
    return (
        <div className="navigation-menu">
            <ul>
                <NavigationItem link="/login" name="Login" />
                <NavigationItem link="/feeds" name="Feeds" />
            </ul>
        </div>
    );
};

export default navigation;