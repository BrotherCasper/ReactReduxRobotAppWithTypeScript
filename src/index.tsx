import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {searchRobots,requestRobots} from './reducers';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './containers/App';

// if (process.env.NODE_ENV !== 'production') {
//   const {whyDidYouUpdate} = require('why-did-you-update');
//   whyDidYouUpdate(React);
// }

const logger = createLogger();

const rootReducer = combineReducers({searchRobots,requestRobots});
// add logger to apply middle ware to enable flux logging.
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

ReactDOM.render((
<Provider store = {store}>
<App/>
</Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.register();
