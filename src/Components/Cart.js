import React, { useContext } from 'react'
import { AppContext } from '../Context/CartContext'

export default function Cart() {
  
  const [cart, setCart,  myFunction] = useContext(AppContext)

  
  function checkout() {
    console.log('Carmen Gastando Pelas')
  }
  

  return(
<>
    <h1>Tienes {cart.length} producto en el carrito</h1>
    {cart && cart.map(item => {return (
      <>
        <p>{item.ProductName}</p>
        <p>{item.ProductPrice}$</p>
      </>)})}
    
    {cart.length?<button onClick={checkout}>Checkout</button>:null}
    {cart.length? <p>Cart Total {myFunction(cart)}$</p> : null} 
    {/* { <button onClick={() => emptyCart()}>Empty Cart</button>} */}
  
</>
  )
}