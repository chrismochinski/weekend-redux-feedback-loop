import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';

let defaultStore = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
}

// single master reducer
const masterReducer = (state = defaultStore, action) => {
    if (action.type === "ADD_FEELING") {
        return {...state, feeling: action.payload };
    }
    else if (action.type === "ADD_UNDERSTANDING") {
        return {...state, understanding: action.payload };
    }
    else if (action.type === "ADD_SUPPORT") {
        return {...state, support: action.payload };
    }
    else if (action.type === "ADD_COMMENTS") {
        return {...state, comments: action.payload };
    }
    else if (action.type === "CLEAR_STORE") {
        return {...state, 
            feeling: '',
            understanding: '',
            support: '',
            comments: '',}
    }
    return state;
}


const storeInstance = createStore(
    combineReducers(
        {
            masterReducer
        }
    ),
    applyMiddleware(logger)
);


ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
