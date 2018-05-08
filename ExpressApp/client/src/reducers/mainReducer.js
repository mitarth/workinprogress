import * as  constants from '../constants/constant';


export default function mainReducer(state={},action){
    switch(action.type){
    
        case constants.LOGIN:
            
            return true;
        case constants.LOGOUT:
            
            return false;
        
        
        default:
            return state;
    }
}