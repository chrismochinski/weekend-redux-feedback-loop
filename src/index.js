import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';

// let defaultStore = {
//     feeling: '',
//     understanding: '',
//     support: '',
//     comments: ''
// }

//feeling reducer
const feelingReducer = (state = '', action) => {
    if (action.type === "ADD_FEELING") {
        return [action.payload, ...state]
    }
    return state;
}

//understanding reducer
const understandingReducer = (state = '', action) => {
    if (action.type === "ADD_UNDERSTANDING") {
        return [action.payload, ...state]
    }
    return state;
}

//support reducer
const supportReducer = (state = '', action) => {
    if (action.type === "ADD_SUPPORT") {
        return [action.payload, ...state]
    }
    return state;
}

//comments reducer
const commentsReducer = (state = '', action) => {
    if (action.type === "ADD_COMMENTS") {
        return [action.payload, ...state]
    }
    return state;
}



const storeInstance = createStore(
    combineReducers(
        {
            feelingReducer,
            understandingReducer,
            supportReducer,
            commentsReducer
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
