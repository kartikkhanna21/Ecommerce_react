import React from 'react';
import { USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from './Actionconstants';

const initialState={
    message:'',
    loading:false
}

export const RegisterReducer=(state=initialState,action)=>{
    switch(action.type){
        case USER_REGISTER_SUCCESS:
            console.log(state.message);
            return{
                ...state,
                message:"Registration Successful",
                loading:true,
            }
        case USER_REGISTER_FAIL:
            return{
                ...state,
                message:action.payload,
                loading:false,
            }
        default: return state;
    }
}

