import {combineReducers} from 'redux';
import isLoggedIn from './mainReducer';
import cart from './cartReducer';

const rootReducer = combineReducers({
    isLoggedIn:isLoggedIn,
    cart:cart,
})

export default rootReducer;