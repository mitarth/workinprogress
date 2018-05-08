import * as types from '../constants/constant.js';

export function login(isLoggedIn){
    
    return {type:types.LOGIN ,isLoggedIn:isLoggedIn}
}

export function logout(isLoggedIn){
    
    return {type:types.LOGOUT
         ,isLoggedIn:isLoggedIn}
}
export function addToCart(productId){
    console.log('Action call')
    return {type:types.ADDTOCART
         ,productId:productId}
}
