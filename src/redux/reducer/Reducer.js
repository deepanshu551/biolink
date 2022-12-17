import { combineReducers } from 'redux';

import userReducer from "./UserReducer";

import dataReducer from "./DataReducer";

const rootReducer = combineReducers({
    user: userReducer
})


export default rootReducer