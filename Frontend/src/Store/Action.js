import { CART_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS, DELETE_CART_ITEM, PRODUCT_INFO_FAIL, PRODUCT_INFO_REQUEST, PRODUCT_INFO_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, USER_REGISTER_SUCCESS,USER_REGISTER_FAIL, USER_SIGNIN, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "./Actionconstants";
import Axios from 'axios';
import CartReducer from './CartReducer';
import { useState } from "react";





export const ListProducts=()=> async(dispatch)=>{
   
    dispatch({
        type:PRODUCT_LIST_REQUEST
    });
    try{
        const {data}=await Axios.get('http://localhost:5000/api/products');
        dispatch({
            type:PRODUCT_LIST_SUCCESS,payload:data
        })
    }
    catch(err){
        const error=err.message;
        dispatch({
            type:PRODUCT_LIST_FAIL,payload:error
        })
    
    }
}

export const ProductScreenproducts=(id)=> async(dispatch)=>{
    console.log(id);
    dispatch({
        type:PRODUCT_INFO_REQUEST,
    });
    try{
        const product= await Axios.get(`http://localhost:5000/api/products/${id}`);
        console.log(product.data);
        dispatch({
            type:PRODUCT_INFO_SUCCESS,payload:product.data
        })
    }
    catch(error){
        dispatch({
            type:PRODUCT_INFO_FAIL,
            payload:
            error.response && error.response.data.message
            ?error.response.data.message  //message fetched from express server check server.js
            :error.message

        }
        )
        
    
    }

}

export const AddCartItem=(productId,quantity)=>async(dispatch)=>{
    const {data}= await Axios.get(`http://localhost:5000/api/products/${productId}`);
   // let cartarray={};
    const cartdata={
        name:data.name,
        price:data.price,
        image:data.image,
        countinstock:data.countInStock,
        product:data._id,
        quantity,

    }
   // cartarray={...cartarray,cartdata}
    dispatch({
        type:CART_ITEM,
        payload:{
            name:data.name,
            price:data.price,
            image:data.image,
            countinstock:data.countInStock,
            product:data._id,
            quantity,
        },

    })
    
 localStorage.setItem('addtocart',JSON.stringify(cartdata));
    
  
  
}

export const DeleteCartItem=(id)=>async(dispatch,getState)=>{
    dispatch({
        type:DELETE_CART_ITEM,
        payload:id,
        
    });
  //  localStorage.removeItem('addtocart');
    console.log(id);

}

export const Signinaction=(email,password) => async(dispatch)=>{
    dispatch({
        type:USER_SIGNIN_REQUEST,
        payload:{ email ,password }
    });

    try{
        console.log('data'); 
        const {data} = await Axios.post("http://localhost:5000/api/users/signin", {email, password}); 
        localStorage.setItem("Userinfo", JSON.stringify(data));

        console.log('data'+ data) ;  
        dispatch({
                type:USER_SIGNIN_SUCCESS,
                payload:data,
    
        });      
    }

    catch(error){
        console.log('errorr'); 
        dispatch({
            type:USER_SIGNIN_FAIL,
            payload: error.response && error.response.data.message
            ?error.response.data.message  //message fetched from express server check server.js
            :error.message

        });
        
    
    }
   
      
}
export const Signoutaction=()=> async(dispatch,getState)=>{

    localStorage.removeItem('shippingaddress');
    localStorage.removeItem('Userinfo');
    localStorage.removeItem('addtocart');
        
    dispatch({
        type:USER_SIGNOUT,
    })

}

export const Registeraction=(name,email,password) => async(dispatch)=>{
    try{
       // const {data} = await Axios.post("http://localhost:5000/api/users/signin", {email}); 

        await Axios.post('http://localhost:5000/api/users/register' , {name,email,password});
        
        console.log('actionmsg');
        dispatch({
            type:USER_REGISTER_SUCCESS,
        });
    }
    catch(err){
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:err.message
        });
    }


}

export const Saveshippingaddress=(data) => (dispatch)=>{
    dispatch({
        type:CART_SAVE_SHIPPING_ADDRESS,
        payload:data,
    })
    localStorage.setItem('shippingaddress', JSON.stringify(data));
}

export const Savepaymentmethod=(data)=>(dispatch)=>{
    dispatch({
        type:CART_SAVE_PAYMENT_METHOD,
        payload:data,
    })
}