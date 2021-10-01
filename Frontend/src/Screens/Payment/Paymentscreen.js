import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkoutsteps from '../../components/Checkoutsteps/Checkoutsteps';
import { Savepaymentmethod } from '../../Store/Action';
import classes from './Paymentscreen.module.css';

const Paymentscreen=(props)=>{
    const shippinginfo=useSelector((state)=>state.addtocart);
    const {cartitems,shippingaddress}=shippinginfo;

    const signininfo=useSelector((state)=>state.signin);
    const {user}=signininfo;

    const [paymentmethod,setpaymentmethod]=useState('Paypal');

    const dispatch=useDispatch();

    const submithandler=(e)=>{
        e.preventDefault();
        console.log(paymentmethod);
        dispatch(Savepaymentmethod(paymentmethod));
        props.history.push('/placeorder');
    }

    if(Object.keys(user).length==0){
        props.history.push('/signin');
    }

    if(Object.keys(shippingaddress).length==0){
        props.history.push('/Shipping');
    }
    
    return(
        <div>
            <Checkoutsteps step1 step2 step3></Checkoutsteps>
            <div className={`${classes.maindiv}`}>
                <form onSubmit={submithandler}>
                    <div class={`row ${classes.subdiv}`}>
                        <div className={`form-check ${classes.labeldiv}`}>
                            <label class={`form-check-label ${classes.radio}`}>
                                <input type="radio" class="form-check-input" value="PayPal" required checked name="paymentmethod" id="paypal" onChange={(e)=>setpaymentmethod(e.target.value)} name="optradio1"/>Paypal 
                            </label>
                        </div>

                        <div className={`form-check ${classes.labeldiv}`}>
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" value="Paytm" required name="paymentmethod" id="paytm" onChange={(e)=>setpaymentmethod(e.target.value)} name="optradio1"/>Paytm 
                            </label>
                        </div>
                    </div>
                    <div className={classes.buttondiv}>
                <button type="submit" class={classes.btn}>Continue</button>
            </div>
                </form>
         
                

            </div>
            

      
        </div>

    )
}

export default Paymentscreen;