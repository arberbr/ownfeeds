import React from 'react';
import './index.css';
import App from './App';

// Import Packages
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const app = (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
