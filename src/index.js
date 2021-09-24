import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';



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






//TODO SUPPORT P3 REDUCER



//TODO COMMENTS P4 REDUCER 




const storeInstance = createStore(
    combineReducers(
        {
            feelingReducer,
            understandingReducer,
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
