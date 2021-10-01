import { USER_SIGNIN_FAIL, USER_SIGNIN_SUCCESS, USER_SIGNIN_REQUEST, USER_SIGNOUT } from "./Actionconstants";

const initialstate={
    user:localStorage.getItem('Userinfo')
    ? JSON.parse(localStorage.getItem('Userinfo')):
    {},
    message:'',
    loading:false,
}

export const Signinreducer=(state=initialstate, action)=>{
    switch(action.type){

        case USER_SIGNIN_REQUEST:
            return{
                ...state,
                loading:true,
                message:''

            }
        
        case USER_SIGNIN_SUCCESS:
            console.log('data');
           
           return{
                ...state,
                user:action.payload,
                loading:false, 
            }

        case USER_SIGNIN_FAIL:
            
            return{
                ...state,
                loading:false,         
                message:action.payload,

            }

            case USER_SIGNOUT:
                return {
                    ...state,
                    user:[],
                    message:'',
                };
                
                    
        default: 
            return state;

    }

}

