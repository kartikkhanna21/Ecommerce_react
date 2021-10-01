import React from 'react';
import classes from './rating.module.css';

const rating=(props)=>{
    return(

        <div>
            <span className={classes.rating}>
                <i className={props.rating >=1 ? "fas fa-star" 
                : props.rating >=0.5 
                ? "fas fa-star-half-alt"  
                : "far fa-star" }></i>
                <i className={props.rating >=2 ? "fas fa-star" 
                : props.rating >=1.5 
                ? "fas fa-star-half-alt"  
                : "far fa-star" }></i>
                <i className={props.rating >=3 ? "fas fa-star" 
                : props.rating >=2.5 
                ? "fas fa-star-half-alt"  
                : "far fa-star" }></i>
                <i className={props.rating >=4 ? "fas fa-star" 
                : props.rating >=3.5 
                ? "fas fa-star-half-alt"  
                : "far fa-star" }></i>
                <i className={props.rating >=5 ? "fas fa-star" 
                : props.rating >=4.5 
                ? "fas fa-star-half-alt"  
                : "far fa-star" }></i>
            </span>
            <span>
                {props.numReviews} Reviews
            </span>
        </div>
        
    )
}

export default rating;