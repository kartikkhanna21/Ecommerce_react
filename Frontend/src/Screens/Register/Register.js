import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './Register.module.css';
import {Registeraction} from '../../Store/Action';
const Register=(props)=>{
    const [email,setemail]=useState('');

    const[password,setpassword]=useState('');

    const [name,setname]=useState('');

    const [confpassword,setconfpassword]=useState('');

    const [validate,setvalidate]=useState(false);

    const [passmessage,setpassmessage]=useState('');

    const dispatch=useDispatch();


    const onsubmitHandler=(e)=>{
        e.preventDefault();
        if(password!=confpassword){
            props.history.push('/register');
          //  setpassmessage('passwords not matching')
          //  console.log(passmessage);
           // return passmessage;
        }
        else{
            dispatch(Registeraction(name,email,password));
            props.history.push('/signin');
        }
 
    }

    const checkpassword=(conffpassword)=>{

        if(password!=conffpassword){
            setpassmessage(<p className={classes.passmessage}>passwords not matching</p>);
        }
        else{
            setpassmessage(' ');
        }
    }
    return(  
        <div>
            <h2 className={classes.signin}>Register</h2>

            
            <div  class="row">
                
                    <div class="col-sm-4">
                        
                    </div>
        
                    <div class={`col-sm-4 ${classes.maindiv}`}>

                   
                 
                        <form onSubmit={onsubmitHandler}>

                            <div>
                                <label>Name</label>
                                <input class="form-control" type="text" id="name" required placeholder="Enter Name" onChange={(e)=>setname(e.target.value)}/>
                            </div>
                        
                            <div>
                                <label>Email</label>
                                <input class="form-control" onChange={(e)=>setemail(e.target.value)} id="email"required placeholder="Enter Email" type="email"/>
        
                            </div>
        
                            <div className={classes.subdiv}>
                                <label>Password</label>
                                <input class="form-control" onChange={(p)=>setpassword(p.target.value)} id="password" required placeholder="Enter Password" type="password"/>
                            </div>

                            <div className={classes.subdiv}>
                                <label>Confirm Password</label>
                                <input class="form-control" onChange=
                                {(p)=>{setconfpassword(p.target.value);
                                    checkpassword(p.target.value);
                                 
                                   
                                }
                                
                                } 
                                id="confpassword" 
                                required placeholder="Confirm Password" 
                                type="password"/>

                                {passmessage}
                                
                                
                            </div>

                        

                         
                            
                        {password!=confpassword?
                        (
                            <button type="submit" disabled class={classes.btn_disabled}>
                           Register
                        </button>
                        )
                        :
                        (
                            <button type="submit" class={classes.btn}>
                           Register
                        </button>
                        )
                        }
                            
           
                     
        
        
                            <div>
                                <span>Already have an existing account?</span>
                                <Link to="/signin"><span>Sign In</span></Link>
                            </div>

                          
                            
                        </form>
                            
                            
        
                        

                    
                       
                    
                       
        
                    </div>
        
                    <div class="col-sm-4">
                        
                    </div>
            </div>

           

        </div>
    
    )


}

export default Register;