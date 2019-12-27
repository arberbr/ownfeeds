import React, { Component, lazy, Suspense } from 'react';
import './App.css';

// Import Packages
import { Redirect, Route, Switch } from 'react-router-dom';

// Import Components
import Home from './views/Home/Home';

// Load Async Components
const asyncLogin = lazy(() => import('./views/Login/Login'));
const asyncFeedsChoser = lazy(() => import('./views/FeedsChoser/FeedsChoser'));

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Suspense fallback={<p>Loading ...</p>}>
					<Switch>
						{/* <Route path='/login' component={asyncLogin} />
						<Route path='/feeds' component={asyncFeedsChoser} /> */}
						<Route path='/' exact component={Home} />
						<Redirect to='/' />
					</Switch>
				</Suspense>
			</div>
		);
	}
}

export default App;
