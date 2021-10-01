import React from 'react';
import Rating from '../rating/rating';
import classes from './products.module.css';
import {NavLink} from 'react-router-dom';
import {Route} from 'react-router-dom';

const products=(props)=>{
    let data={};
    data=props.product;
    console.log("data",data);
    return(
       
                <div>
                      <div>
                          <NavLink to={`/product/${data._id}`}><img src={props.product.image} alt="" className={classes.product_image}/></NavLink>
                      </div>
                      <div  className={classes.product_title}>
                          <NavLink to={`/product/${data._id}`}><p> {data.name}</p></NavLink>
                      </div>
     
                        <Rating rating={data.rating} numReviews={data.numReviews}/>

                        
                  
                      <div>
                          <p className={classes.product_price}> Rs {data.price}</p>
                      </div>
                    
                </div>
                
    )
}

export default products;