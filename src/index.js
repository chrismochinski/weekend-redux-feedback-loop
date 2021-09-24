import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';


//TODO FEELING P1 REDUCER

const feelingReducer = (state = '', action) => {
    if (action.type === "ADD_FEELING") {
        return [action.payload, ...state]
    }
    return state;
}


//TODO UNDERSTANDING P2 REDUCER



//TODO SUPPORT P3 REDUCER



//TODO COMMENTS P4 REDUCER 




const storeInstance = createStore(
    combineReducers(
        {
            feelingReducer,
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
