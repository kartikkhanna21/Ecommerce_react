import './App.css';
import React from 'react';
import {NavLink} from 'react-router-dom';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import homescreen from './Screens/HomeScreen';
import Productscreen from './Screens/ProductScreen';
import cartscreen from './Screens/Cart/CartScreen';
import { AddCartItem } from './Store/Action';
import { useDispatch, useSelector } from 'react-redux';
import Signin from './Screens/Signin/Signin';
import Shippingscreen from './Screens/Shipping/Shippingscreen';
import {Signoutaction} from './Store/Action';
import Register from './Screens/Register/Register';
import Paymentscreen from './Screens/Payment/Paymentscreen';
import Placeorderscreen from './Screens/Placeorderscreen/Placeorderscreen';

function App() {
  const Cartitems=useSelector((state)=>state.addtocart);
  let cartitemsno=0;

  if(Cartitems.cartitems.length==1 && Cartitems.cartitems[0].name==undefined){
    cartitemsno=Cartitems.cartitems.length-1
  }
  else{
    cartitemsno=  Cartitems.cartitems.length;
  }

  const signininfo=useSelector((state)=>state.signin);

  const {user}=signininfo;
  console.log(user);

  const dispatch=useDispatch();

  const signouthandler=()=>{
    dispatch(Signoutaction());
  }
    
  
  return (
    <BrowserRouter>  {/* Browserrouter is used where routes need to be defined*/}
      <div className="grid-container">
      <header className="row">
          <div>
              <NavLink to="/" className="brand">Amazon </NavLink>
          </div>

          <div className="cartdiv">
              <NavLink className="nav_items cartdiv"  to="/cart">Cart 
             
              <span >
                <div className="cartqty">
                  <span className="qty">{cartitemsno}</span>
                </div></span>
              
               </NavLink>
               {
                  Object.keys(user).length!=0?(
                    <div class="dropdown">
                      <Link className="nav_items" to="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{user.name} <i className="fa fa-caret-down"></i>{' '} 
                      </Link>
                     
                       
                      <Link to="#signout" class="dropdown-content"onClick={signouthandler}>Sign out</Link>

                     
                    
                    </div>
                  )
                  :
                  (  <Link className="nav_items" to="/Signin">Signin</Link>)        
               }
             
             
          </div>

      </header>
      <main>
         <Route path="/product/:id" exact render={(props) => (
                            <Productscreen {...props} />
                        )}/>  
        <Route path="/cart/:id?" component={cartscreen}/>

        <Route path="/Signin" component={Signin}/>

        <Route path="/register" component={Register}/>

        <Route path="/placeorder" component={Placeorderscreen}/>

        <Route path="/payment" component={Paymentscreen}/>

        <Route path="/Shipping" component={Shippingscreen}/>

        <Route path="/" component={homescreen} exact/> {/*exact means only when path is / Homescreen will be rendered*/}
      </main>

      <footer className="row center">
        Copyright @ Amazon 2021
      </footer>
      <style>
        {"\.row{\
            display: -ms-flexbox;\
            display: flex;\
            -ms-flex-wrap: wrap;\
            flex-wrap: wrap;\
            margin-right: 0px; \
           margin-left: 0px;\
        }\
        "}
      </style>
  </div>
</BrowserRouter>

  )
}

export default App;
