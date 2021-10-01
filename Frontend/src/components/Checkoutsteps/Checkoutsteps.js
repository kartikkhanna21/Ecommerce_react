import React from 'react';
import classes from './Checkoutsteps.module.css';

const Checkoutsteps=(props)=>{
    return(
        <div className={` row ${classes.checkout_steps} `}>
            <div className={props.step1? classes.active :' '}>Signin</div>
            <div className={props.step2?classes.active:' '}>Shipping</div>
            <div className={props.step3?classes.active:' '}>Payment</div>
            <div className={props.step4?classes.active:' '}>Place order</div>
        </div>
    )
}

export default Checkoutsteps;