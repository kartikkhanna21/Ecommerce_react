import React, { useState } from 'react';
import Rating from '../components/rating/rating';
import  { useEffect } from 'react';
import classes from './ProductScreen.module.css';
import {Link, NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {ProductScreenproducts} from '../Store/Action';
import Spinner from '../components/Spinner/Spinner';
import MessageBox from '../components/MessageBox/MessageBox';

const Productscreen =(props)=>{
    const dispatch=useDispatch();
    const productInfo=useSelector((state)=>state.productInfo); //basically productInfo fetches state from redux store
    
    const {product,error,loading}=productInfo;

    const productId=props.match.params.id;

    useEffect(()=>{
        dispatch(ProductScreenproducts(productId));
      },[dispatch,productId]);

    let [qty, setqty]=useState(1);
    //find is used to find the product by product id in the url
    //params is used to fetch the id part in url

    let ProductInfo={}

    const onsubmithandler=()=>{
        props.history.push(`/cart/${productId}?qty=${qty}`);
    }

  //  const updatestateHandler=(value)=>{
//setqty = value;
  //      console.log(setqty);
//console.log("qty:"+ qty)
    

    //const addtocartHandler=()=>{
      //  props.history.push(`/cart/${productId}?qty={qty}`);
     //  console.log(qty,setqty);
       
    //}
    if(!product){
        <div class="tex-center">Product Not Found</div>
    }
    {loading? ProductInfo=<Spinner/> : error? ProductInfo=<MessageBox>{error}</MessageBox> : 
    ProductInfo=(
        <div>
            <div>
                    <NavLink to="/" ><p className={classes.navlink}>Back To Results</p></NavLink>
                </div>
                <div className={classes.row_flex} >
                    <div class="col-sm-5" >
                        <img className={classes.product_image} src={product.image}/>
                    </div>

                    <div class="col-sm-3">

                        <h5> {product.name}</h5>
                        <div>
                            <Rating rating={product.rating}/>
                            <span>{product.numReviews} Reviews</span>
                        </div>
                        <p>Description : {product.description}</p>
                    
                    </div>

                    <div className={` col-sm-3 ${classes.product_info} `}> {/*very important to use bootstrap with normal css module */}
                        
                            <div className={classes.contn_flex}>
                                <p>Price</p>
                                <p>{product.price} Rs</p>

                            </div>
                            <div className={classes.contn_flex}>
                                <p>Status</p>
                                {product.countInStock>0? 
                                    <span className={classes.success}>In Stock</span>
                                    :<span className={classes.danger}>Unavailable</span>
                                }

                            </div>

                            {product.countInStock>0? 
                                        (
                                            <div>
                                                 <div className={classes.contn_flex}>
                                                    <p>Quantity</p>
                                                    <select value={qty} class="form-control" onChange={q=>setqty(q.target.value)}>
                                                        {console.log("qty:"+ qty,"setqty:"+setqty)}
                                                     {[...Array(product.countInStock).keys()].map(x=>( ///this code creates an array of size of value of countinstock and keys is used to index array for ex countinstock is 5 the array index is 0-4 here x stores the index of element
                                                         <option key={x+1} value={(x+1)}>{x+1}</option>
                                                     ))}                                        
                                                                                                
                                                        
                                                    </select>
                                                </div>
                                    
                                                <div class="text-center">
                                                  <button onClick={onsubmithandler} className={classes.btn}>Add to Cart</button>
                                                </div>
                                            </div>
                                        )
                                        :<>  </>}
                  
                           
                            
                    
                        
                    </div>
                </div>
                
                <style>


                    {"\@media screen and (max-width:774px){\
                        .col-sm-3 {\
                            -ms-flex: 0 0 25%;\
                            flex: 0 0 25%;\
                            max-width: 96%;\
                        }\
                    }\
                    "}

                    {"\
                        .form-control{\
                            width: 30%;\
                        }\
                    }\
                    "}

             

                </style>
     


                    
            
                

            
            
            </div>
    )}

    return(
        <div >
        
            {ProductInfo}
 
        
        </div>
            
              
        )     
    }

 
    
    


export default Productscreen;