import * as  constants from '../constants/constant';


export default function cartReducer(state=[],action){
    switch(action.type){
    
        
        case constants.ADDTOCART:
            
            return [...state,
                Object.assign({},action.productId)];
        
        default:
            return state;
    }
}