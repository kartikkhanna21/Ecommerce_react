import { useState } from 'react';
import Checkoutsteps from '../../components/Checkoutsteps/Checkoutsteps';
import classes from './Shippingscreen.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Saveshippingaddress } from '../../Store/Action';

const Shippingscreen=(props)=>{

    const signininfo=useSelector((state)=>state.signin);
    const {user}=signininfo;

    if(Object.keys(user).length==0){
        props.history.push('/signin');
    }
    
    const shippinginfo=useSelector((state)=>state.addtocart);
    const {cartitems,shippingaddress}=shippinginfo;

  

    const [name,setname]=useState(shippingaddress.name);
    const [address,setaddress]=useState(shippingaddress.address);
    const [city,setcity]=useState(shippingaddress.city);
    const [country,setcountry]=useState(shippingaddress.country);
    const [postcode,setpostcode]=useState(shippingaddress.postcode);

    const dispatch=useDispatch();

    const onsubmitHandler=(e)=>{
        e.preventDefault();
        dispatch(Saveshippingaddress({name,address,city,postcode,country}));
        props.history.push('/payment');
    }


 

 


    return(
        <div>
            <Checkoutsteps step1 step2></Checkoutsteps>
            <div>

            <h2 className={classes.signin}>Shipping Details</h2>
                <div  class="row">
                
                        <div class="col-sm-4">
                            
                        </div>
                        
            
                        <div class={`col-sm-4 ${classes.maindiv}`}>

                        
                    
                            <form onSubmit={onsubmitHandler}>

                                <div>
                                    <label>Full Name</label>
                                    <input class="form-control" value={name} type="text" id="name" required placeholder="Full Name" onChange={(e)=>setname(e.target.value)}/>
                                </div>
                            
                                <div>
                                    <label>Address</label>
                                    <textarea class="form-control" value={address} onChange={(e)=>setaddress(e.target.value)} id="address"required placeholder="Enter Address" type="text" />
            
                                </div>

                                <div>
                                    <label>City</label>
                                    <input class="form-control" value={city} onChange={(e)=>setcity(e.target.value)} id="City"required placeholder="Enter City" type="text" />
            
                                </div>

                                <div>
                                    <label>Postal Code</label>
                                    <input class="form-control" value={postcode} onChange={(e)=>setpostcode(e.target.value)} id="City" required placeholder="Postal Code" type="text"/>
            
                                </div>

                                <div>
                                    <label>Country</label>
                                    <input class="form-control" value={country} onChange={(e)=>setcountry(e.target.value)} id="Country"required placeholder="Enter Country" type="text"/>
            
                                </div>
                                                                                  
                                <button type="submit" class={classes.btn}>Continue</button>
                                                  
                                
            
                        
            
            
                               

                            
                                
                            </form>
                                
                                
            
                            

                        
                        
                        
                        
            
                        </div>
            
                        <div class="col-sm-4">
                            
                        </div>
                </div>

            

            </div>
        </div>
    )
}

export default Shippingscreen;