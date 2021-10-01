import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import {ProductListReducer} from './HomeReducer';
import thunk from 'redux-thunk'; //redux - thunk
import { ProductScreenReducer } from './ProductReducer';
import { CartReducer } from './CartReducer';
import {Signinreducer} from './Signinreducer';
import { RegisterReducer } from './RegisterReducer';




const reducer=combineReducers({
    productList:ProductListReducer,
    productInfo:ProductScreenReducer,
    addtocart:CartReducer,
    signin:Signinreducer,
    register:RegisterReducer
})


const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //used for using react devtools here compose comes from redux...also advanced store code used as middleware is used

//const store=createStore(reducer,iniitialState,loadFromLocalStorage(),composeEnhancer(applyMiddleware(thunk)));

const store=createStore(reducer,composeEnhancer(applyMiddleware(thunk)));
//localStorage.setItem('cartItems',JSON.stringify(initialstate.cartitems));  

export default store;

