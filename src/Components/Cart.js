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
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

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
            {cart.map(item => (
            <div key={item.ProductId} >
        <Card className={classes.root}>
            <CardContent>
             
              <Typography variant="h5" component="h2">
              {item.ProductName}
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
             {item.ProductDescription}
                </Typography>
        <Typography variant="body2" component="p">
          {item.ProductPrice}$ x {item.Qty} Items = Total{item.ProductPrice*item.Qty}$
         
        </Typography>
      </CardContent>
      <CardActions>
                <Button onClick={()=> addToCart(item)}>+</Button>
                <Button onClick={()=>removeFromCart(item)}>-</Button>
      </CardActions>
    </Card>
            
            
              
  </div> ))}
  
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
                  {cart.length === 0?<h1>Your cart is empty</h1>:<Checkout/>}
            </div>
      </div>

</div>

      
</>
      )
   }
  
  
  export default Cart;


