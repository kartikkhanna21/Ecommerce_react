import React, { useEffect, useState } from 'react';
import Products from '../components/Products/products';
import Spinner from '../components/Spinner/Spinner';
import MessageBox from '../components/MessageBox/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import {ListProducts} from '../Store/Action';



const Homescreen=()=>{
  let ProductList={};
  const dispatch=useDispatch();

  const productList=useSelector((state)=>state.productList);
  const {error,loading,products}=productList;


  useEffect(()=>{
    dispatch(ListProducts());
  },[dispatch]);

  {loading? ProductList=<Spinner/> : error? ProductList=<MessageBox>{error}</MessageBox> : ProductList=(
    <ul className="row-products">            
            {products.map(products=>(
        
              <li key={products.id} className="product-box">
                    <Products product={products}/>
              
                          
              </li>

            ))}

                      
          </ul>
  )};


    return(
      <div>
        {ProductList}
      </div>
        
    )
}

export default Homescreen;