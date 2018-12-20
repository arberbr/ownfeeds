import React from 'react';
import './index.css';
import App from './App';

// Import Packages
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Import Reducers
import feedsReducer from './store/reducers/feeds';

const rootReducer = combineReducers({
    feedsReducer: feedsReducer
});

const store = createStore(rootReducer, applyMiddleware( thunk ));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app , document.getElementById('root'));