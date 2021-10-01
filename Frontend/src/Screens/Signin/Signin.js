import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from "./Signin.module.css";
import {Signinaction} from '../../Store/Action';
import { Link } from 'react-router-dom';
import MessageBox from '../../components/MessageBox/MessageBox';
import Spinner from '../../components/Spinner/Spinner';


const Signin=(props)=>{

    const [email,setemail]=useState('');

    const[password,setpassword]=useState('');

    const dispatch=useDispatch();

    const signininfo=useSelector((state)=>state.signin);

    const {user,message,loading}=signininfo;

    const registerinfo=useSelector((state)=>state.register);

    const {regmessage}=registerinfo;

    console.log(regmessage)

    const redirect= props.location.search? props.location.search.split('=')[1]:'/';
    
    const onSubmitHandler=(e)=>{

        e.preventDefault();

        dispatch(Signinaction(email,password));
        
    }

    console.log(user , 'length' + Object.keys(user).length);

    useEffect(()=>{
        
        if(Object.keys(user).length==5){
           props.history.push(redirect);
       }
       
    }, [user])
    return(
        <div>
        {loading?<Spinner></Spinner>:(
            <div>
            <h2 className={classes.signin}>Sign In</h2>

            
            <div  class="row">
                
                    <div class="col-sm-4">
                        
                    </div>
        
                    <div class={`col-sm-4 ${classes.maindiv}`}>
                    {regmessage}
                    {message?<MessageBox>{message}</MessageBox>:(<div></div>)}
                        <form onSubmit={onSubmitHandler}>
                        
                            <div>
                                <label>Email</label>
                                <input class="form-control" onChange={(e)=>setemail(e.target.value)} id="email"required placeholder="Enter Email" type="email"/>
        
                            </div>
        
                            <div className={classes.subdiv}>
                                <label>Password</label>
                                <input class="form-control" onChange={(p)=>setpassword(p.target.value)} id="password" required placeholder="Enter Password" type="password"/>
                            </div>
        
                            <button type="submit"  class={classes.btn}>
                                Sign In
                            </button>
        
                            <div>
                                <span>New Customer?</span>
                                <Link to="/register"><span>Create your account</span></Link>
                            </div>

                          
                            
                        </form>
                            
                            
        
                        

                    
                       
                    
                       
        
                    </div>
        
                    <div class="col-sm-4">
                        
                    </div>
            </div>

           

        </div>
            )}
        </div>
        
    )
    
}

export default Signin;