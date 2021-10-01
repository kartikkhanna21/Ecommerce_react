import { PRODUCT_INFO_FAIL, PRODUCT_INFO_REQUEST, PRODUCT_INFO_SUCCESS } from "./Actionconstants";

const initialstate={
    product:{},
    loading:false,
    error:false

}

export const ProductScreenReducer=(state=initialstate,action)=>{
    switch(action.type){
        
        case PRODUCT_INFO_REQUEST:
            return{
                ...state,
                loading:true,
         
            }
        case PRODUCT_INFO_SUCCESS:
            return{
                ...state,
                loading:false,
                product:action.payload

            }
            case PRODUCT_INFO_FAIL:
                return{
                    ...state,
                    loading:false,
                    error:action.payload
    
                }
        default: 
           
            return state;
    }
}

