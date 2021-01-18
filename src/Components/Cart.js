/* eslint-disable */

import React, { useContext } from 'react'
import { AppContext } from '../Context/CartContext'
// import { LocationContext } from '../Context/LocationContext'




 function Cart () {
  // const [coordinates, setCoordinates] = useContext(LocationContext);
  // console.log('coordinates received',coordinates);
    const [cart, _,  __, addToCart, removeFromCart] = useContext(AppContext)  
    const itemsPrice = cart.reduce((a, c) => a + c.ProductPrice * c.Qty, 0);
    const taxPrice = itemsPrice * 0.15;
    const shipping = itemsPrice > 30? 0 : 3;
    const totalPrice = itemsPrice + taxPrice + shipping;
 
    return(
      <aside>
          <h2>Cart Items</h2>
          {cart.length === 0 && <div className="empty-cart"> <h1>Your cart is empty </h1></div>}
          {cart.map(item => (
            <div key={item.ProductId} className='ekrUEE'>
            <a className="hkklCl">
              <div className="gqPLMb">
                  <div className="kTzLAm">{item.ProductName}</div>
                  <div className="kTzLAm">{item.ProductPrice}$ x {item.Qty} Items = Total{item.ProductPrice*item.Qty}$</div>
              </div>
              <div className="hLtXwG">
              <div className="deCOwR">
                   <div className="imzCjD">Where is this</div>
              </div>
              </div>
            </a>
              <div className='col-2'>........</div>
              <div className='col-2'>
                 {/* <AddBoxIcon><button onClick={()=> addToCart(item)}></button></AddBoxIcon> */}
                <button onClick={()=> addToCart(item)}></button>
                <button onClick={()=>removeFromCart(item)}></button>
              </div>
              
            </div>
          ))}
  
      {cart.length > 0 && (
        <>
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
        </>
      )}
  
      </aside>
      )
   }
  
  
  export default Cart;


