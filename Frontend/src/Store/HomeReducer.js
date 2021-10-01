
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "./Actionconstants";
const initialState={
    products:[],loading:true,
    error:false,
}
export const ProductListReducer=(state=initialState,action)=>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return{
                ...state,  //copy of the state is very important
                loading:true
            }

        case PRODUCT_LIST_SUCCESS:
            return{
                ...state,
                loading:false,
                products:action.payload
                
            }

        case PRODUCT_LIST_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default: 
            return state;
        
    }
}