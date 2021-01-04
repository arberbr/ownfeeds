import React, { Component } from 'react';
import './App.css';

// Import Components
import Home from './views/Home/Home';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Home />
			</div>
		);
	}
}

export default App;
