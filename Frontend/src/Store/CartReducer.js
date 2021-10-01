import { CART_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS, DELETE_CART_ITEM } from "./Actionconstants";
import { useSelector } from "react-redux";



const initialstate={
    
        cartitems:[localStorage.getItem('addtocart')
        ? JSON.parse(localStorage.getItem('addtocart')):
        ' '],
        shippingaddress:localStorage.getItem('shippingaddress')
        ? JSON.parse(localStorage.getItem('shippingaddress')):
        {},
        paymentmethod:'PayPal',
 
    
}




export const CartReducer=(state=initialstate,action)=>{
    //const cartupdate=useSelector((state)=>state.deletefromcart);
    
    switch(action.type){
        case CART_ITEM:
            const item=action.payload;
            console.log(item);

            console.log(state.cartitems);

            if(state.cartitems!=[]){

            }
           
            const itemexist=state.cartitems.find((x)=>x.product===item.product);
            console.log(itemexist);
            console.log(state.cartitems);

        
         
            if(itemexist){
                return{
                    ...state,
                    cartitems:state.cartitems.map((x)=>x.product===item.product?item:x),
                    
                }

                
            }
            else{
                
                return{
                    ...state,
                    cartitems:[...state.cartitems,item],
                    
                }
                
            }
            
        
        case DELETE_CART_ITEM:
            return{
                ...state,
                cartitems:state.cartitems.filter((item)=>item.product !== action.payload)
            }

        case CART_SAVE_SHIPPING_ADDRESS:
            return{
                ...state,
                shippingaddress:action.payload
            }
        case CART_SAVE_PAYMENT_METHOD:
            return{
                ...state,
                paymentmethod:action.payload
            }

        
        
        default:
            return state;
                //cartitems:cartupdate,
            
                
    }
    

}