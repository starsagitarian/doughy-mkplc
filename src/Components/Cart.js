/* eslint-disable */

import React, { useContext } from 'react'
import { AppContext } from '../Context/CartContext'
import Checkout from './CheckoutForm';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {Button} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {  flexGrow: 1,'& > *': 
            { margin: theme.spacing(1)},
                 palette: 
                       {primary: 
          { 
          main: purple[500]}, 
          secondary: {main: green[500]} 
          }
    }}));

 function Cart () {
    const classes = useStyles();
    const [cart, _,  __, addToCart, removeFromCart] = useContext(AppContext)  
    const itemsPrice = cart.reduce((a, c) => a + c.ProductPrice * c.Qty, 0);
    const taxPrice = itemsPrice * 0.15;
    const shipping = itemsPrice > 30? 0 : 3;
    const totalPrice = itemsPrice + taxPrice + shipping;
 
    return(
<>
  <div className="cart-flex-vertical">
       <div className="cart-header">
          <h1>Your Cart</h1>
       </div>

       <div className="cart-flex-row">  
            <div className="cart-page-products">
            {cart.length === 0 && <div className="empty-cart"> <h1>Your cart is empty </h1></div>}
            {cart.map(item => (
            <div key={item.ProductId} >
            <a >
              <div >
                  <div >{item.ProductName}</div>
                  <div >{item.ProductPrice}$ x {item.Qty} Items = Total{item.ProductPrice*item.Qty}$</div>
              </div>
              <div >
              <div >
                   <div >Where is this</div>
              </div>
              </div>
            </a>
              <div >
                 {/* <AddBoxIcon><button onClick={()=> addToCart(item)}></button></AddBoxIcon> */}
                <button onClick={()=> addToCart(item)}></button>
                <button onClick={()=>removeFromCart(item)}></button>
              </div>
              
            </div>
          ))}
  
      {cart.length > 0 && (
        <div className='checkout-wrapper'>
          <div className='checout-cart-info'>
            <hr></hr>
              <div>
                <div className="col-2">Cart Total</div>
                <div className="col-1">{itemsPrice.toFixed(2)}</div>
              </div>
              <div>
                <div className="col-2">Tax</div>
                <div className="col-1">{taxPrice.toFixed(2)}</div>
              </div>
              <div>
                <div className="col-2">Delivery</div>
                <div className="col-1">{shipping.toFixed(2)}</div>
              </div>
                <div>
                <div className="col-2"><strong>Total Price</strong></div>
                  <div className="col-1">{totalPrice.toFixed(2)}</div>
                </div>
          </div>
        </div>
      )}
            </div>
            <div className="checkout-form">
                  <Checkout/>
            </div>
      </div>

</div>

      
</>
      )
   }
  
  
  export default Cart;


