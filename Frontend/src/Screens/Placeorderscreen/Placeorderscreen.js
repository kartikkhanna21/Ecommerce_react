import React from 'react';
import { useSelector } from 'react-redux';
import Checkoutsteps from '../../components/Checkoutsteps/Checkoutsteps';
import classes from './Placeorderscreen.module.css';

const Placeorderscreen=(props)=>{
    const shippinginfo=useSelector((state)=>state.addtocart);
    const {cartitems,shippingaddress,paymentmethod}=shippinginfo;

    const signininfo=useSelector((state)=>state.signin);
    const {user}=signininfo;
    
    if(Object.keys(user).length==0){
        props.history.push('/signin');
    }

    if(Object.keys(shippingaddress).length==0){
        props.history.push('/Shipping');
    }

    let subquantity=0;
    let subprice=0;
    let subproductprice=0;
    let subtotal=0;
    let totalquantity=0;
    let shippingprice=50;
    let grandtotal=0;
    return(
        <div>
            <Checkoutsteps step1 step2 step3 step4></Checkoutsteps>
            <div class="row">
            <div class="col-sm-7">
                    <div className={classes.detailsdiv}>
                        <label className={classes.heading}>Shipping Details</label>
                        <div>
                            <label>Name:  </label>
                            <label> {shippingaddress.name}</label>
                        </div>

                        <div>
                            <label>Address:  </label>
                            <label> {shippingaddress.address}, 
                            {shippingaddress.city}, 
                            {shippingaddress.postcode},{shippingaddress.country}</label>
                        </div>
                        
                    </div>
                    <div className={classes.detailsdiv}>
                        <label className={classes.heading}>Payment Details</label>
                        <div>
                            <label className={classes.heading}>Method: </label>
                            <label>{paymentmethod}</label>
                        </div>
                    </div>
                    <div className={classes.detailsdiv}>
                        <label className={classes.heading}>Ordered items</label>
                        <ul>
                        {cartitems.map((item)=>(
                                      (subprice=item.price,
                                        subquantity=item.quantity,
                                        subproductprice=subquantity*subprice,
                                        subtotal=subtotal+subproductprice,
                                        totalquantity=totalquantity+subquantity,
                                        grandtotal=subtotal+shippingprice
                                    ),
                            <li key={item.product}>
                                <div className={classes.cartitemdiv}>
                                                   <div>
                                                   
                                                   <img className={classes.product_image} src={item.image}></img>
                                                                      
                                               </div>
                                           
                                               <div className={classes.cartaligndiv}>
                                                                    
                                                   <p className={classes.name_style}>{item.name}</p>
                                                                       
                                                                        
                                               </div>

                                               <div className={classes.cartaligndiv}>
                                                   <span>{item.quantity} X </span>
                                                   <span> Rs {item.price}</span>
                                                   <span> = Rs {item.quantity*item.price}</span>

                                               </div>


                                </div>
                            </li>
                            
     
                        ))}
                        </ul>
                        
                            
                    </div>

                </div>

                <div class={`col-sm-4 ${classes.rightouterdiv}`}>
                    <div className={classes.detailsdiv}>
                        <p className={classes.heading}>Order Summary</p>
                        <div className={classes.order_align}>
                            <span>Items:</span>
                            <span> Rs {subtotal}</span>
                        </div>
                        <div className={classes.order_align}>
                            <span>Shipping</span>
                            <span> Rs 50</span>
                        </div>
                        <div className={classes.order_align}> 
                            <span className={classes.heading}>Order Total</span>
                            <span className={classes.heading}> Rs {grandtotal}</span>
                        </div>
                      
                        
                       
                        <button className={classes.btn}>Place Order</button>
                    </div>
     
                </div>

            </div>


            
        </div>
    )
}

export default Placeorderscreen;