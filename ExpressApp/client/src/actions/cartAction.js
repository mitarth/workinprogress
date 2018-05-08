import * as types from '../constants/constant.js';


export function addToCart(productId){
    console.log('Action call')
    return {type:types.ADDTOCART
         ,productId:productId}
}