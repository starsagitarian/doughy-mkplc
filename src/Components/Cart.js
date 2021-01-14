import React, { useContext } from 'react'
import { AppContext } from '../Context/CartContext'

export default function Cart() {
  
  const [cart, _,  emptyCart, __] = useContext(AppContext)

  
  function checkout() {
    console.log('Gastando la Pasta')
  }
  
console.log(cart)
  return(
<>
    <h1>Tienes {cart.length} producto en el carrito</h1>
    {cart && cart.map(item => {return (
      <>
        <h4>{item.ProductName} x {item.Qty}</h4>
        <p>{item.ProductPrice}$</p>
      </>)})}
    
    {cart.length?<button onClick={checkout}>Checkout</button>:null}
    {cart.length? <p>Cart Total {() => console.log('cart total')}$</p> : null} 
    { <button onClick={() => emptyCart()}>Empty Cart</button>}
  
</>
  )
}