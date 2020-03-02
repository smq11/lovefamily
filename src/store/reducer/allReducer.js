import {combineReducers} from 'redux';
import city from './city.js';
import user from './user.js';
import sc from './sc.js';

const allReducers=combineReducers({
    curCity:city,
    user,
    sc
})

export default allReducers;