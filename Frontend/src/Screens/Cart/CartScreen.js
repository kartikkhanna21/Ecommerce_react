import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddCartItem, DeleteCartItem } from '../../Store/Action';
import classes from './CartScreen.module.css';


const CartScreen = (props)=>{
    const productId=props.match.params.id;
    const Quantity=props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
const dispatch=useDispatch();

let [qty,setqty]=useState();

console.log(Quantity);

const Cartitems=useSelector((state)=>state.addtocart);

console.log('cart'+ Cartitems);

console.log('length'+ Cartitems.cartitems.length);



    useEffect(()=>{
        if(productId){
            dispatch(AddCartItem(productId,Quantity));
        }
    },[dispatch,productId,Quantity])

    console.log(Cartitems.cartitems);
   // console.log(Cartitems.cartitems[0].name);

    let subquantity=0;
    let subprice=0;
    let subproductprice=0;
    let subtotal=0;
    let totalquantity=0;

const DeleteHandler=(id)=>{
    dispatch(DeleteCartItem(id));
}
return(
        <div>
            <div className={`col-sm-8 ${classes.outerdiv}`}>
                <div className={classes.heading}>
                    <h4>Shopping cart </h4>
                </div>
               
                
                {/*Product Id : {productId}
                Product Quantity : {Quantity}*/}

                {/*Cartitems.length==0?
                        <div className={classes.productdetails}><p>Cart is Empty</p></div>:*/}
                
                <div >
                    <ul>
                        {
                    Cartitems.cartitems.length==1 && Cartitems.cartitems[0].name==undefined?
                    <div><p>Cart is Empty!</p></div>
                    :
                    
                        
                    Cartitems.cartitems.map((item)=>(
                            (subprice=item.price,
                                subquantity=item.quantity,
                                subproductprice=subquantity*subprice,
                                subtotal=subtotal+subproductprice,
                                totalquantity=totalquantity+subquantity
                            ),
                            
                        
                        <li key={item.product}>
                            {item.product==undefined?<></>:
                            <div className={classes.productdetails}>
                                {console.log(item.product)}
                        
                            <div>
                                <Link to={`/product/${item.product}`}>
                                    <img className={classes.product_image} src={item.image}></img>
                                </Link>
                            </div>
    
                            <div className={classes.product_name}>
                                <Link to={`/product/${item.product}`}>
                                    <p className={classes.name_style}>{item.name}</p>
                                </Link>
                                 
                            </div>
                            
    
                            <div className={classes.productdmodify}>
                                <div  className={classes.productinner}>
                                    <div >
                                    <select value={item.quantity} class="form-control" onChange={q=>
                                        (
                                            dispatch(AddCartItem(item.product,Number(q.target.value))
                                        ))}>
                                        {console.log("qty:"+ qty,"setqty:"+setqty)}
                                    {[...Array(item.countinstock).keys()].map(x=>( ///this code creates an array of size of value of countinstock and keys is used to index array for ex countinstock is 5 the array index is 0-4 here x stores the index of element
                                        <option key={x+1} value={(x+1)}>{x+1}</option>
                                    ))}                                        
                                                                                
                                        
                                    </select>
                                </div>
                                </div>
                                <div className={classes.productinner}> 
                                    Rs {item.price}
                                
                                </div>
                                <div className={classes.productinner}>
                                    <button type="button" class="btn btn-danger" onClick={()=>DeleteHandler(item.product)}>Delete</button>{/* method to call function using onclick ()=>functionname() */}
                                </div>
    
                            </div>
    
                        </div>
                        
                        }
                            
                                
                        </li>
                    
                        ))}
                    </ul>

                
            

                </div>

            </div>
            <div className={`col-sm-3 ${classes.rightouterdiv}`}>
                <p className={classes.total_price}>Subtotal({totalquantity} items) : Rs {subtotal}</p>
                <Link to="/Shipping"><button className={classes.btn}>Checkout</button></Link>

            </div>
            
        </div>
        
)

}

export default CartScreen;