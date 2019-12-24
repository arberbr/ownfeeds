<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, { Component, lazy } from 'react';
>>>>>>> parent of 3092c42... Improving mobile version and fixed all bugs
import './App.css';

// Import Packages
import { Redirect, Route, Switch } from 'react-router-dom';

// Import Components
import Home from './views/Home/Home';

<<<<<<< HEAD
=======
const asyncLogin = lazy(() => import('./views/Login/Login'));
const asyncFeedsChoser = lazy(() => import('./views/FeedsChoser/FeedsChoser'));

>>>>>>> parent of 3092c42... Improving mobile version and fixed all bugs
class App extends Component {
	render() {
		return (
			<div className='App'>
				<Switch>
<<<<<<< HEAD
=======
					<Route path='/login' component={asyncLogin} />
					<Route path='/feeds' component={asyncFeedsChoser} />
>>>>>>> parent of 3092c42... Improving mobile version and fixed all bugs
					<Route path='/' exact component={Home} />
					<Redirect to='/' />
				</Switch>
			</div>
		);
	}
}

export default App;
