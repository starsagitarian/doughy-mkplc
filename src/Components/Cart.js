/* eslint-disable */

import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/CartContext'
import Checkout from './CheckoutForm';

import { makeStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import {Button} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Footer from './Footer'

const useStyles = makeStyles((theme) => ({
  root: {  maxHeight:150,
           flexGrow: 1,'& > *': 
            { margin: theme.spacing(1)},
                 palette: 
                       {primary: 
          { 
          main: purple[500]}, 
          secondary: {main: green[500]} 
          }
    },
    root2:{ maxHeight:205,
            maxWidth: 600,
      
    }
    
  }));

 function Cart () {
    const classes = useStyles();
    const [cart, _,  __, addToCart, removeFromCart] = useContext(AppContext)
    const [checkoutClicked, setCheckoutClicked] = useState(false)  
    const itemsPrice = cart.reduce((a, c) => a + c.ProductPrice * c.Qty, 0);
    const taxPrice = itemsPrice * 0.15;
    const shipping = itemsPrice > 30? 0 : 3;
    const totalPrice = itemsPrice + taxPrice + shipping;
 
    return(
<>
    <div className="cart-flex-vertical">
          <div className="cart-header">
           <h1></h1>
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
    <br></br>
  </div> ))}

 
  <Card >
      </Card>
      </div> 
            <div className="checkout-form">
            {cart.length > 0 && (
            <Card className={classes.root2}>
                <CardContent>
              <Typography variant="h5" component="h2">
                <div className="col-2">Cart Total {itemsPrice.toFixed(2)}</div>

              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              <div className="col-2">Tax {taxPrice.toFixed(2)}</div>
           
                </Typography>
                <Typography variant="body2" component="p">
                   <div className="col-2">Delivery {shipping.toFixed(2)}</div>
                </Typography>
                <Typography variant="body2" component="p">
                   <div className="col-2"><strong>Total Price {totalPrice.toFixed(2)}</strong></div>
                </Typography>
              </CardContent>
       <CardActions>
      <div className="checkout-form">
                <Button id='checkout-button' onClick={() => setCheckoutClicked(!checkoutClicked)} variant="text" color="primary">
                  Checkout
                </Button>
            </div>
      </CardActions>
    </Card>
  )}
              {cart.length === 0?<h1>Your cart is empty</h1>:<div>{checkoutClicked?<Checkout/>:null}</div>}
            </div>
      </div>

  </div>
  <Footer />
</>
   )
  }
  
  
  export default Cart;


