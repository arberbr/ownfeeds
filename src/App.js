import React, { Component } from 'react';
import './App.css';

// Import Packages
import { Redirect, Route, Switch } from 'react-router-dom';

// Import Components
import Home from './views/Home/Home';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Switch>
					<Route path='/' exact component={Home} />
					<Redirect to='/' />
				</Switch>
			</div>
		);
	}
}

export default App;
