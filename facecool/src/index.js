import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router} from 'react-router'
import createHistory from 'history/createBrowserHistory'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './ducks'
import services from './services'

import {reducer as formReducer} from 'redux-form'

const store = createStore(combineReducers({
    ...reducers,
    form: formReducer,

}),applyMiddleware(thunk.withExtraArgument(services)))

const history = createHistory()
ReactDOM.render(
    <Provider store={store}>
    <Router history={history}>
        <App  history={history}/>
    </Router>
    </Provider>,

document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
