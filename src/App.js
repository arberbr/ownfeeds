import React, { Component } from 'react';
import './App.css';

import {Redirect, Route, Switch} from 'react-router-dom';

import Home from './containers/Home/Home';

import asyncComponent from './hoc/asyncComponent';

const asyncLogin = asyncComponent(() => import('./containers/Login/Login'));
const asyncFeedsChoser = asyncComponent(() => import('./containers/FeedsChoser/FeedsChoser'));

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