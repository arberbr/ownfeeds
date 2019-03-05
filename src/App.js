import React, { Component } from 'react';
import './App.css';

// Import Packages
import {Redirect, Route, Switch} from 'react-router-dom';

// Import Components
import Home from './views/Home/Home';

import asyncComponent from './hoc/asyncComponent';

const asyncLogin = asyncComponent(() => import('./views/Login/Login'));
const asyncFeedsChoser = asyncComponent(() => import('./views/FeedsChoser/FeedsChoser'));

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/login" component={asyncLogin} />
                    <Route path="/feeds" component={asyncFeedsChoser} />
                    <Route path="/" exact component={Home} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default App;