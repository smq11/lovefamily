import {createStore,compose} from 'redux';
import allReducers from './reducer/allReducer';

let store = createStore(allReducers,compose(window.__REDUX_DEVTOOLS_EXTENSION__  ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined))

export default store;